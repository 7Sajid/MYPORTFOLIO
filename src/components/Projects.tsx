import { ExternalLink, Lock } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "NBR TAX HUB POS SYSTEM IMPLEMENTATION",
    description: "Led the implementation and deployment of a comprehensive Point of Sale (POS) system integrated with the NBR Tax Hub. Ensured secure transaction processing, real-time data synchronization, and compliance with national tax regulations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Node.js", "React", "PostgreSQL", "POS Hardware API", "Tax Integration"],
    link: "#",
    isInternal: true
  },
  {
    id: 2,
    title: "MIST IT INFRASTRUCTURE IMPLEMENTATION",
    description: "Designed and implemented a robust, scalable IT infrastructure for the Military Institute of Science and Technology (MIST). Involved advanced network configuration, server deployment, and establishing secure operational protocols for campus-wide connectivity.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Linux Servers", "Cisco Networking", "VMware", "Cybersecurity", "Infrastructure"],
    link: "#",
    isInternal: true
  },
  {
    id: 3,
    title: "SNAKE GAME",
    description: "A Snake game That U Can Play On Your Free Time. Developed a classic retro-style Snake game with responsive controls, score tracking, and increasing difficulty levels.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Logic"],
    link: "https://github.com/7Sajid",
    isInternal: false
  },
  {
    id: 4,
    title: "SMART CITY PREDICTOR",
    description: "Smart City Project Used to Find-out A City Smart Or Not. Analyzes urban data metrics (infrastructure, connectivity, green energy) to evaluate and score the 'smartness' of a city.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "Data Analytics", "Machine Learning", "React"],
    link: "https://github.com/7Sajid",
    isInternal: false
  },
  {
    id: 5,
    title: "INTELLIGENT VOICE RECOGNITION ASSISTANT",
    description: "Intelligent Voice Recognition Assistant for Desktop. A voice-controlled AI desktop assistant capable of handling system commands, web searches, opening applications, and daily tasks.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "SpeechRecognition", "NLP", "pyttsx3"],
    link: "https://github.com/7Sajid",
    isInternal: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-8">
      <div>
        <h3 className="text-primary dark:text-primary font-semibold tracking-wide text-sm mb-2"><span className="text-rose-600 dark:text-pink-500">const</span> <span className="text-blue-600 dark:text-blue-400">deployedProjects</span> = [</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary">&gt;_ cat projects.md</h2>
      </div>

      <div className="flex flex-col gap-12 pl-4 border-l border-primary/30 dark:border-primary/30 ml-2">
        {projects.map((project, idx) => (
          <div key={project.id} className="code-card flex flex-col md:flex-row gap-6 hover:bg-primary/10 dark:hover:bg-primary/5 transition-colors group">
            <div className="md:w-5/12 overflow-hidden border border-primary/20 dark:border-primary/20 relative">
              <div className="absolute inset-0 bg-primary/20 dark:bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="md:w-7/12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2 text-primary dark:text-primary font-mono text-sm">
                <span>{`// Project 0${idx + 1}`}</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-secondary dark:text-secondary mb-4">"{project.title}"</h4>
              
              <p className="text-gray-700 dark:text-primary/80/80 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-transparent border border-primary/30 dark:border-primary/30 text-xs text-gray-600 dark:text-primary/70">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                {project.isInternal ? (
                  <button className="flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-500 cursor-not-allowed" title="Classified / Internal System">
                    <Lock size={16} /> Internal Access Only
                  </button>
                ) : (
                  <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                    <ExternalLink size={16} /> View Deployment
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-primary dark:text-primary font-semibold tracking-wide text-sm">];</div>
    </section>
  );
}

