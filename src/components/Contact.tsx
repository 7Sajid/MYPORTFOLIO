import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, type: 'contact' })
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError('Something went wrong. Please check your setup or try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-12 border-t border-gray-200 dark:border-slate-800 pt-16">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side: Info */}
        <div className="md:w-1/2 flex flex-col gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Have questions or ready to transform your infrastructure?
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <a href="mailto:amanshazid786@gmail.com" className="code-card flex items-center justify-between group cursor-pointer hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Email us</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">amanshazid786@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={20} className="text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>

            <a href="https://wa.me/8801533301091" target="_blank" rel="noreferrer" className="code-card flex items-center justify-between group cursor-pointer hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">WhatsApp / Call</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">+880 1533-301091</p>
                </div>
              </div>
              <ArrowUpRight size={20} className="text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>

            <div className="code-card flex items-center justify-between group hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Our location</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
                </div>
              </div>
              <ArrowUpRight size={20} className="text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="code-card flex flex-col gap-5">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h3>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-gray-700 dark:text-gray-300 font-bold">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                placeholder="Enter your name..."
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-300 font-bold">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                placeholder="Enter your email..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-gray-700 dark:text-gray-300 font-bold">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={5}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow resize-none"
                placeholder="Enter your message..."
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">Message sent successfully! We will get back to you shortly.</p>}

            <div className="flex flex-col gap-3 mt-2">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {isLoading ? 'Sending...' : 'Submit Message'}
              </button>
              
              <Link 
                to="/consultation" 
                className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold rounded-lg shadow-md hover:shadow-lg transition-all text-center"
              >
                Free Consult
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


