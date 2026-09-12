export default function About() {
  return (
    <section id="about" className="flex flex-col gap-8 relative">
      <div>
        <h3 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide text-sm mb-2 uppercase">
          About Me
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Who am I?</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-lg rounded-xl"></div>
          <div className="relative border border-gray-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 p-2 rounded-xl shadow-md">
            <img 
              src="/profile.jpg" 
              alt="Rafat Ul Aman Sajid" 
              className="w-full h-auto rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 right-4 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full border border-gray-200 dark:border-slate-700 text-xs text-blue-600 dark:text-blue-400 font-bold shadow-sm">
              Available for Hire
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            I'm a passionate Software Engineer based in Bangladesh with a strong foundation in modern web technologies. My journey in tech started with a curiosity about how things work under the hood, which quickly turned into a career building robust and scalable applications.
          </p>
        </div>
      </div>
    </section>
  );
}


