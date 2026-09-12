import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message, type } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Configure Nodemailer transport using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // This should be a Google App Password
      },
    });

    const subject = type === 'consultation' 
      ? `New Consultation Request from ${name}`
      : `New Portfolio Message from ${name}`;

    const htmlBody = `
      <h3>${subject}</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${type === 'consultation' ? '<p><strong>Type:</strong> Free Consultation</p>' : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send the email to yourself
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, 
      replyTo: email,
      subject: subject,
      html: htmlBody,
    });

    // If it's a contact form, ALSO send a silent WhatsApp notification using CallMeBot
    if (type === 'contact' && process.env.WHATSAPP_API_KEY) {
      const waText = encodeURIComponent(`*New Portfolio Lead!*\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
      const waUrl = `https://api.callmebot.com/whatsapp.php?phone=8801533301091&text=${waText}&apikey=${process.env.WHATSAPP_API_KEY}`;
      
      try {
        await fetch(waUrl);
      } catch (waError) {
        console.error('WhatsApp Bot Error:', waError);
        // We don't fail the whole request if just the WhatsApp bot fails
      }
    }

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ message: 'Error sending message', error });
  }
}
