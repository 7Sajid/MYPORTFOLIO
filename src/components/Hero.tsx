import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Web Developer & IT Infrastructure Specialist";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center gap-6 relative">
      <div className="absolute -left-6 top-1/4 h-32 w-[1px] bg-gradient-to-b from-transparent via-blue-600/50 dark:via-blue-400/50 to-transparent"></div>

      <div className="z-10">
        <div className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider text-sm mb-4 uppercase">
          Welcome to my portfolio
        </div>
        <h2 className="text-[5.5vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white drop-shadow-sm tracking-tight leading-tight mb-4 whitespace-nowrap overflow-visible">
          HELLO I AM RAFAT UL AMAN SAJID
        </h2>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 font-medium mb-6 flex flex-wrap items-center gap-x-2 min-h-[4rem] sm:min-h-[3rem]">
          <span className="text-blue-600 dark:text-blue-400">{typedText}</span>
          <span className="animate-pulse text-blue-600 dark:text-blue-400 -ml-1">|</span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          Building scalable, high-performance web applications and automated systems. Bridging the gap between design and robust backend architecture.
        </p>

        <div className="flex gap-4 mt-8 flex-wrap">
          <Link to="/consultation" className="px-6 py-3 bg-blue-600 border border-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:border-blue-700 transition-all shadow-md">
            Free Consultation
          </Link>
          <a href="#experience" className="px-6 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-sm">
            View Experience
          </a>
          <a href="#projects" className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            View Projects
          </a>
          <a href="https://drive.google.com/file/d/1KEnzAM3WOS0XVSixDsrEJnjF2yDPUzgB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-yellow-400 border border-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all shadow-[0_0_10px_rgba(250,204,21,0.3)] hover:shadow-[0_0_15px_rgba(250,204,21,0.6)]">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}


