
export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 border-b border-primary/20 dark:border-primary/20">
      <div className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"><span className="text-primary dark:text-primary">$_</span> Rafat<span className="text-primary dark:text-primary">()</span></div>
      
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#about" className="text-gray-600 dark:text-primary/70 hover:text-primary dark:hover:text-primary transition-colors">"About"</a>
        <a href="#experience" className="text-gray-600 dark:text-primary/70 hover:text-primary dark:hover:text-primary transition-colors">"Experience"</a>
        <a href="#skills" className="text-gray-600 dark:text-primary/70 hover:text-primary dark:hover:text-primary transition-colors">"Skills"</a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="https://github.com/7Sajid" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://www.linkedin.com/in/rafat7867/" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="mailto:amanshazid786@gmail.com" className="px-4 py-2 border border-primary/30 dark:border-primary/30 text-primary dark:text-primary font-bold hover:bg-primary/10 dark:hover:bg-primary/5 transition-colors flex items-center gap-2">
          &lt;Contact /&gt;
        </a>
      </div>
    </header>
  );
}


