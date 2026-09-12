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
        <h3 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide text-sm mb-2 uppercase">
          Technical Arsenal
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pl-4 border-l border-blue-600/30 dark:border-blue-400/30 ml-2">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="code-card flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">{category.title}</h4>
            </div>
            
            <ul className="flex flex-col gap-2">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xs opacity-75">•</span> 
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


