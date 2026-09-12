export default function Experience() {
  const experiences = [
    {
      company: "Genex Infosys PLC",
      role: "Executive Engineer – Network Operations Center",
      period: "Oct 2024 – Nov 2025",
      points: [
        "Maintained a full-stack internal web application and developed robust JavaScript automation scripts for comprehensive testing, workflow automation, and incident reporting.",
        "Designed and consumed REST APIs and documentation in swagger to integrate monitoring dashboards with third-party vendor systems, improving real-time visibility and SLA compliance.",
        "Led the National Board of Revenue (NBR) EFD/SDC Implementation Project.",
        "Collaborated with City Bank IT to certify POS terminals in compliance with Visa, MasterCard, TakaPay, and UnionPay standards.",
        "Managed Virtual Machine (VM) allocation and configuration to support scalable development, testing, and production environments.",
        "Utilized Git for version control across scripting projects and contributed to CI/CD pipeline improvements."
      ]
    },
    {
      company: "Genex Infrastructure",
      role: "Executive IT",
      period: "Nov 2023 – Jul 2024",
      points: [
        "Assisted developers in coding, testing, and debugging web applications — working across HTML, CSS, JavaScript, and backend integrations to improve system functionality.",
        "Conducted application testing and QA processes to identify bugs and ensure optimal software performance prior to release.",
        "Maintained accurate inventory records and performed regular system patches, updates, and preventive maintenance using version-controlled scripts."
      ]
    },
    {
      company: "Loginex PLC",
      role: "IT Intern",
      period: "Mar 2023 – Sep 2023",
      points: [
        "Provided technical support by diagnosing and resolving hardware, software, and network-related issues for internal teams.",
        "Assisted in implementing and monitoring data backup and recovery procedures.",
        "Managed and updated databases, spreadsheets, and IT inventory records, gaining hands-on experience with MySQL.",
        "Escalated complex technical issues to senior engineers with detailed documentation."
      ]
    }
  ];

  return (
    <section id="experience" className="flex flex-col gap-8">
      <div>
        <h3 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide text-sm mb-2 uppercase">
          Career Journey
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Professional Experience</h2>
      </div>

      <div className="flex flex-col gap-8 border-l border-blue-600/30 dark:border-blue-400/30 pl-6 ml-2">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[33px] top-4 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-slate-900 shadow-sm"></div>
            <div className="code-card">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h4>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mt-1">{exp.company}</div>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2 md:mt-0 bg-gray-100 dark:bg-slate-800 rounded-md px-3 py-1">
                  {exp.period}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


