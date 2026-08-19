export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "HTML5", "Tailwind CSS"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js (basic)", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST API Development"]
    },
    {
      title: "Databases",
      skills: ["MongoDB / Mongoose", "MySQL", "Firebase"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Firebase", "Git & GitHub"]
    },
    {
      title: "Networking & Infra",
      skills: ["Network Monitoring", "Server Management", "VM Configuration", "SLA Management"]
    }
  ];

  return (
    <section id="skills" className="flex flex-col gap-8">
      <div>
        <h3 className="text-primary dark:text-primary font-semibold tracking-wide text-sm mb-2"><span className="text-rose-600 dark:text-pink-500">const</span> <span className="text-blue-600 dark:text-blue-400">technicalArsenal</span> = [</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary">&gt;_ Skills & Technologies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pl-4 border-l border-primary/30 dark:border-primary/30 ml-2">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="code-card flex flex-col gap-4 hover:bg-primary/10 dark:hover:bg-primary/5 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-lg font-bold text-gray-900 dark:text-primary/90">"{category.title}"</h4>
            </div>
            
            <ul className="flex flex-col gap-2">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2 text-gray-700 dark:text-primary/80">
                  <span className="text-primary dark:text-primary text-xs opacity-50">&gt;</span> 
                  "{skill}"
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-primary dark:text-primary font-semibold tracking-wide text-sm">];</div>
    </section>
  );
}

