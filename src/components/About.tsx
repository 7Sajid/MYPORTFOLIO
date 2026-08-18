export default function About() {
  return (
    <section id="about" className="flex flex-col gap-8 relative">
      <div>
        <h3 className="text-green-700 dark:text-primary font-semibold tracking-wide text-sm mb-2"><span className="text-rose-600 dark:text-pink-500">export default class</span> <span className="text-blue-600 dark:text-blue-400">AboutMe</span> {'{'}</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-green-100">&gt;_ Who am I?</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 dark:from-primary/20 dark:to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
          <div className="relative border border-green-600/30 dark:border-primary/30 bg-white/50 dark:bg-black/50 p-2">
            <img 
              src="/profile.jpg" 
              alt="Rafat Ul Aman Sajid" 
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 right-4 bg-white dark:bg-background px-3 py-1 border border-green-600/30 dark:border-primary/30 text-xs text-green-700 dark:text-primary font-bold">
              status: "online"
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-6">
          <p className="text-gray-700 dark:text-green-200/80 leading-relaxed text-lg">
            <span className="text-gray-500 dark:text-primary mr-2">{'//'}</span>
            I'm a passionate Software Engineer based in Bangladesh with a strong foundation in modern web technologies. My journey in tech started with a curiosity about how things work under the hood, which quickly turned into a career building robust and scalable applications.
          </p>
        </div>
      </div>
      <div className="text-primary font-semibold tracking-wide text-sm mt-4">{'}'}</div>
    </section>
  );
}
