import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="flex flex-col gap-12 border-t border-green-600/20 dark:border-primary/20 pt-16">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side: Info */}
        <div className="md:w-1/2 flex flex-col gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-transparent border border-green-600/30 dark:border-primary/30 rounded-full text-xs font-semibold text-green-700 dark:text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-green-600 dark:bg-primary animate-pulse"></span>
              Contact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-green-100 mb-4">&gt;_ Get in touch</h2>
            <p className="text-gray-600 dark:text-green-300/70 text-lg">
              {'//'} Have questions or ready to transform your infrastructure?
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <a href="mailto:amanshazid786@gmail.com" className="code-card flex items-center justify-between group hover:bg-green-50 dark:hover:bg-primary/5 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-transparent border border-green-600/30 dark:border-primary/30 text-green-700 dark:text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-primary transition-colors">Email us</h4>
                  <p className="text-sm text-gray-600 dark:text-green-300/70">amanshazid786@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={20} className="text-green-700 dark:text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            <a href="https://wa.me/8801533301091" target="_blank" rel="noreferrer" className="code-card flex items-center justify-between group hover:bg-green-50 dark:hover:bg-primary/5 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-transparent border border-green-600/30 dark:border-primary/30 text-green-700 dark:text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-primary transition-colors">WhatsApp / Call</h4>
                  <p className="text-sm text-gray-600 dark:text-green-300/70">+880 1533-301091</p>
                </div>
              </div>
              <ArrowUpRight size={20} className="text-green-700 dark:text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="code-card flex items-center justify-between group hover:bg-green-50 dark:hover:bg-primary/5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-transparent border border-green-600/30 dark:border-primary/30 text-green-700 dark:text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-primary transition-colors">Our location</h4>
                  <p className="text-sm text-gray-600 dark:text-green-300/70">Dhaka, Bangladesh</p>
                </div>
              </div>
              <ArrowUpRight size={20} className="text-green-700 dark:text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2">
          <form className="code-card flex flex-col gap-4 bg-white/50 dark:bg-transparent border border-green-600/30 dark:border-primary/30">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-amber-600 dark:text-yellow-300 font-bold">"Name"</label>
              <input 
                type="text" 
                id="name" 
                className="bg-transparent border border-green-600/20 dark:border-primary/20 p-3 text-gray-900 dark:text-white focus:outline-none focus:border-green-600 dark:focus:border-primary placeholder:text-gray-400 dark:placeholder:text-primary/30"
                placeholder="Enter your name..."
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-amber-600 dark:text-yellow-300 font-bold">"Email"</label>
              <input 
                type="email" 
                id="email" 
                className="bg-transparent border border-green-600/20 dark:border-primary/20 p-3 text-gray-900 dark:text-white focus:outline-none focus:border-green-600 dark:focus:border-primary placeholder:text-gray-400 dark:placeholder:text-primary/30"
                placeholder="Enter your email..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-amber-600 dark:text-yellow-300 font-bold">"Message"</label>
              <textarea 
                id="message" 
                rows={5}
                className="bg-transparent border border-green-600/20 dark:border-primary/20 p-3 text-gray-900 dark:text-white focus:outline-none focus:border-green-600 dark:focus:border-primary placeholder:text-gray-400 dark:placeholder:text-primary/30 resize-none"
                placeholder="Enter your message..."
              ></textarea>
            </div>

            <button 
              type="button" 
              className="mt-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold py-3 hover:bg-green-600 dark:hover:bg-primary transition-colors border border-transparent"
            >
              $ Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
