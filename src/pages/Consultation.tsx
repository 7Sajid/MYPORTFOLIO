import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Building2, Globe, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';

export default function Consultation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 relative">
        <BackgroundAnimation />
        <div className="code-card max-w-lg w-full text-center relative z-10">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-20 h-20 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Request Received!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Thank you for reaching out. Our team will review your requirements and get back to you within 24 hours to schedule your free consultation.
          </p>
          <Link to="/" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative pb-20">
      <BackgroundAnimation />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium mb-12 transition-colors">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Info */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-semibold rounded-full text-sm mb-6">
                Free Consultation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Transform Your Business Operations
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Schedule a free 30-minute discovery call to discuss your technical challenges. We provide enterprise-grade solutions tailored to your unique business needs.
              </p>
            </div>
            
            <div className="flex flex-col gap-6 mt-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Core Services</h3>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 text-blue-600 dark:text-blue-400">
                  <Server size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">IT Infrastructure Support</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Robust network design, server deployment, and enterprise security.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 text-purple-600 dark:text-purple-400">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">eCommerce Business Support</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Scalable POS systems, payment gateway integration, and high-traffic handling.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 text-emerald-600 dark:text-emerald-400">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">SaaS Business Support</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Cloud architecture, API integrations, and automated workflow deployment.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div>
            <div className="code-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Request a Discovery Call</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="font-semibold text-gray-700 dark:text-gray-300 text-sm">First Name</label>
                    <input type="text" id="firstName" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="John" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Last Name</label>
                    <input type="text" id="lastName" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Work Email</label>
                  <input type="email" id="email" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="john@company.com" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Company Name</label>
                  <input type="text" id="company" className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="Company Inc." />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Service of Interest</label>
                  <select id="service" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow">
                    <option value="" disabled selected>Select a primary service...</option>
                    <option value="infrastructure">IT Infrastructure Support</option>
                    <option value="ecommerce">eCommerce Business Support</option>
                    <option value="saas">SaaS Business Support</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Project Details</label>
                  <textarea id="message" rows={4} className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow resize-none" placeholder="Briefly describe your current setup and goals..."></textarea>
                </div>
                
                <button type="submit" className="w-full mt-2 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all text-lg">
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
