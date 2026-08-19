export default function Certificates() {
  const certificates = [
    { id: 1, src: '/certificates/cert5.png', title: 'IBM Cybersecurity Course' },
    { id: 2, src: '/certificates/cert2.png', title: 'Workshop on Software Testing' },
    { id: 3, src: '/certificates/cert4.png', title: 'Microsoft Full Stack Web Development' }
  ];

  return (
    <section className="flex flex-col gap-8">
      <div>
        <h3 className="text-primary dark:text-primary font-semibold tracking-wide text-sm mb-2"><span className="text-rose-600 dark:text-pink-500">const</span> <span className="text-blue-600 dark:text-blue-400">certificateImages</span> = [</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary">&gt;_ Verified Credentials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 border-l border-primary/30 dark:border-primary/30 ml-2">
        {certificates.map((cert) => (
          <div key={cert.id} className="code-card flex flex-col gap-4 hover:bg-primary/10 dark:hover:bg-primary/5 transition-colors group">
            <h4 className="text-sm font-bold text-secondary dark:text-secondary truncate" title={cert.title}>"{cert.title}"</h4>
            <div className="relative w-full aspect-[4/3] overflow-hidden border border-primary/20 dark:border-primary/20 group-hover:border-primary/50 dark:group-hover:border-primary/50 transition-colors">
              <img 
                src={cert.src} 
                alt={cert.title} 
                className="w-full h-full object-contain bg-black/5 dark:bg-black/20 opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-primary dark:text-primary font-semibold tracking-wide text-sm">];</div>
    </section>
  );
}


