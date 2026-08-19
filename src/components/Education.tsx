export default function Education() {
  const certs = [
    "Cybersecurity Roles & Processes – IBM",
    "Technical Support Fundamentals – Google Digital Garage",
    "Full-Stack Web Development Training – Microsoft Technical",
    "Terminal Payment System – Telpo & BGI Interactive"
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-primary dark:text-primary font-semibold tracking-wide text-sm mb-2"><span className="text-rose-600 dark:text-pink-500">interface</span> <span className="text-blue-600 dark:text-blue-400">Education</span> {'{'}</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary">&gt;_ Academic Background</h2>
        </div>
        
        <div className="code-card flex flex-col gap-2 hover:bg-primary/10 dark:hover:bg-primary/5 transition-colors">
          <h4 className="text-lg font-bold text-secondary dark:text-secondary">degree: "Bachelor of Technology – CSE"</h4>
          <p className="text-primary dark:text-primary text-sm">institution: "Lovely Professional University - INDIA | 1st Division"</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">period: "Jul 2018 – Jan 2023"</p>
          <ul className="list-none mt-2 text-sm text-gray-700 dark:text-primary/80/80 space-y-1">
            <li><span className="text-primary dark:text-primary">--</span> Final year project: AI-based solution for automated system monitoring and anomaly detection.</li>
            <li><span className="text-primary dark:text-primary">--</span> Completed major and minor projects in web development, networking, and cloud computing.</li>
            <li><span className="text-primary dark:text-primary">--</span> Achieved Python programming certifications from reputed online platforms.</li>
          </ul>
        </div>

        <div className="code-card flex flex-col gap-2 hover:bg-primary/10 dark:hover:bg-primary/5 transition-colors">
          <h4 className="text-lg font-bold text-secondary dark:text-secondary">degree: "Higher Secondary Certificate – Science"</h4>
          <p className="text-primary dark:text-primary text-sm">institution: "Bangladesh Air Force Shaheen College | Dhaka"</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">period: "Jan 2015 – Nov 2017"</p>
        </div>

        <div className="code-card flex flex-col gap-2 hover:bg-primary/10 dark:hover:bg-primary/5 transition-colors">
          <h4 className="text-lg font-bold text-secondary dark:text-secondary">degree: "Secondary School Certificate – Science"</h4>
          <p className="text-primary dark:text-primary text-sm">institution: "Kishoreganj Govt. Boys High School"</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">period: "Jan 2010 – Jun 2015"</p>
        </div>
        <div className="text-primary dark:text-primary font-semibold tracking-wide text-sm">{'}'}</div>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-primary dark:text-primary font-semibold tracking-wide text-sm mb-2"><span className="text-rose-600 dark:text-pink-500">const</span> <span className="text-blue-600 dark:text-blue-400">certifications</span> = [</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary">&gt;_ Certifications</h2>
        </div>

        <div className="code-card hover:bg-primary/10 dark:hover:bg-primary/5 transition-colors">
          <ul className="space-y-4">
            {certs.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-primary dark:text-primary mt-0.5">&gt;</span>
                <span className="text-gray-700 dark:text-primary/80">"{cert}"</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-primary dark:text-primary font-semibold tracking-wide text-sm">];</div>

        <div className="mt-4">
          <h3 className="text-primary dark:text-primary font-semibold tracking-wide text-sm mb-4"><span className="text-rose-600 dark:text-pink-500">export const</span> <span className="text-blue-600 dark:text-blue-400">Publications</span></h3>
          <div className="code-card hover:bg-primary/10 dark:hover:bg-primary/5 transition-colors">
            <h4 className="font-bold text-secondary dark:text-secondary mb-1">"Interpretation on the Google Cloud Platform and Its Wide Cloud Services"</h4>
            <p className="text-sm text-gray-600 dark:text-primary/70/70 mb-2">// International Journal of Security and Privacy in Pervasive Computing (Nov 2022)</p>
            <a href="https://doi.org/10.4018/IJSPPC.313586" target="_blank" rel="noreferrer" className="text-primary dark:text-primary text-sm hover:underline border-b border-primary/50 dark:border-primary border-dashed">
              DOI: 10.4018/IJSPPC.313586
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

