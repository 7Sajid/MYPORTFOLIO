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
          <h3 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide text-sm mb-2 uppercase">
            Qualifications
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Academic Background</h2>
        </div>
        
        <div className="code-card flex flex-col gap-2">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Technology – CSE</h4>
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Lovely Professional University - INDIA | 1st Division</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Jul 2018 – Jan 2023</p>
          <ul className="list-disc list-inside mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>Final year project: AI-based solution for automated system monitoring and anomaly detection.</li>
            <li>Completed major and minor projects in web development, networking, and cloud computing.</li>
            <li>Achieved Python programming certifications from reputed online platforms.</li>
          </ul>
        </div>

        <div className="code-card flex flex-col gap-2">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Higher Secondary Certificate – Science</h4>
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Bangladesh Air Force Shaheen College | Dhaka</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Jan 2015 – Nov 2017</p>
        </div>

        <div className="code-card flex flex-col gap-2">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Secondary School Certificate – Science</h4>
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Kishoreganj Govt. Boys High School</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Jan 2010 – Jun 2015</p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide text-sm mb-2 uppercase">
            Additional Learning
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Certifications</h2>
        </div>

        <div className="code-card">
          <ul className="space-y-4">
            {certs.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide text-sm mb-4 uppercase">Publications</h3>
          <div className="code-card">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Interpretation on the Google Cloud Platform and Its Wide Cloud Services</h4>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">International Journal of Security and Privacy in Pervasive Computing (Nov 2022)</p>
            <a href="https://doi.org/10.4018/IJSPPC.313586" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
              DOI: 10.4018/IJSPPC.313586
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


