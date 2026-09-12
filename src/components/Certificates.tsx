export default function Certificates() {
  const certificates = [
    { id: 1, src: '/certificates/cert5.png', title: 'IBM Cybersecurity Course' },
    { id: 2, src: '/certificates/cert2.png', title: 'Workshop on Software Testing' },
    { id: 3, src: '/certificates/cert4.png', title: 'Microsoft Full Stack Web Development' }
  ];

  return (
    <section className="flex flex-col gap-8">
      <div>
        <h3 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide text-sm mb-2 uppercase">
          Proof of Excellence
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Verified Credentials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 border-l border-blue-600/30 dark:border-blue-400/30 ml-2">
        {certificates.map((cert) => (
          <div key={cert.id} className="code-card flex flex-col gap-4 group">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate" title={cert.title}>{cert.title}</h4>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md border border-gray-200 dark:border-slate-700">
              <img 
                src={cert.src} 
                alt={cert.title} 
                className="w-full h-full object-contain bg-gray-50 dark:bg-slate-800 transition-opacity"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


