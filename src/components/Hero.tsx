import { useState, useEffect } from 'react';


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
      <div className="absolute -left-6 top-1/4 h-32 w-[1px] bg-gradient-to-b from-transparent via-green-600/50 dark:via-primary/50 to-transparent"></div>

      <div className="z-10">
        <div className="text-green-700 dark:text-primary font-mono mb-4 flex items-center gap-2">
          <span className="text-gray-500 dark:text-gray-400">~/portfolio</span> $ ./run_profile.sh
        </div>
        <h2 className="text-[5.5vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-green-50 tracking-tight leading-tight mb-2 whitespace-nowrap overflow-visible">
          HELLO I AM RAFAT UL AMAN SAJID
        </h2>
        <div className="text-2xl md:text-3xl font-mono text-gray-800 dark:text-green-100 font-semibold mb-6 flex items-center gap-2 h-10">
          <span className="text-rose-600 dark:text-pink-500">const</span> <span className="text-blue-600 dark:text-blue-400">role</span> = <span className="text-amber-600 dark:text-yellow-300">"{typedText}"</span><span className="animate-pulse text-green-700 dark:text-primary">|</span>
        </div>

        <p className="text-gray-600 dark:text-green-300/70 text-lg md:text-xl max-w-2xl font-mono">
          <span className="text-gray-400 dark:text-primary/50 mr-2">{'//'}</span>
          Building scalable, high-performance web applications and automated systems. Bridging the gap between design and robust backend architecture.
        </p>

        <div className="flex gap-4 mt-8">
          <a href="#experience" className="px-6 py-3 bg-green-100 dark:bg-primary/10 border border-green-600/30 dark:border-primary/30 text-green-700 dark:text-primary font-bold hover:bg-green-200 dark:hover:bg-primary/20 transition-all">
            $ cd experience
          </a>
          <a href="#projects" className="px-6 py-3 bg-transparent border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
            cat projects.md
          </a>
        </div>
      </div>
    </section>
  );
}
