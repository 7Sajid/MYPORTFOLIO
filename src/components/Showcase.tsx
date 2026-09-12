import { useState } from 'react';
import { ExternalLink, Monitor, Smartphone } from 'lucide-react';

const websites = [
  {
    id: 'pride',
    name: 'Pride of BD',
    url: 'https://pride-of-bangladesh.vercel.app/'
  },
  {
    id: 'argho',
    name: 'Argho Portfolio',
    url: 'https://arghoportfolio.vercel.app/'
  },
  {
    id: 'enamul',
    name: 'Enamul Saad',
    url: 'https://7sajid.github.io/Saad-Portfolio/'
  },
  {
    id: 'hojaifa',
    name: 'Hojaifa Portfolio',
    url: 'https://7sajid.github.io/HojaifaPortfolio.github.io/'
  }
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState(websites[0]);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="flex flex-col gap-8 mt-12">
      <div>
        <h3 className="text-primary dark:text-primary font-semibold tracking-wide text-sm mb-2">
          <span className="text-rose-600 dark:text-pink-500">const</span> <span className="text-blue-600 dark:text-blue-400">showcaseBox</span> = &lbrace;
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary">&gt;_ ./run_showcase.sh</h2>
      </div>

      <div className="flex flex-col pl-4 border-l border-primary/30 dark:border-primary/30 ml-2">
        {/* Browser Mockup */}
        <div className="code-card p-0 overflow-hidden border border-primary/30 rounded-lg flex flex-col shadow-2xl">
          
          {/* Browser Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-black border-b border-primary/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="flex bg-white dark:bg-gray-900 rounded-md px-4 py-1.5 text-xs text-gray-600 dark:text-gray-400 font-mono w-1/2 overflow-hidden text-ellipsis whitespace-nowrap justify-center border border-gray-300 dark:border-gray-800 shadow-inner">
              {activeTab.url}
            </div>
            
            <div className="flex gap-3 text-gray-500 dark:text-gray-400">
              <button 
                onClick={() => setIsMobile(false)} 
                className={`hover:text-primary transition-colors ${!isMobile ? 'text-primary' : ''}`}
                title="Desktop View"
              >
                <Monitor size={16} />
              </button>
              <button 
                onClick={() => setIsMobile(true)} 
                className={`hover:text-primary transition-colors ${isMobile ? 'text-primary' : ''}`}
                title="Mobile View"
              >
                <Smartphone size={16} />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto bg-gray-50 dark:bg-gray-900/50 border-b border-primary/20">
            {websites.map(site => (
              <button
                key={site.id}
                onClick={() => setActiveTab(site)}
                className={`px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-r border-primary/10 ${
                  activeTab.id === site.id 
                    ? 'bg-white dark:bg-black text-primary border-b-2 border-b-primary' 
                    : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                {site.name}
              </button>
            ))}
          </div>

          {/* Iframe Container */}
          <div className="bg-gray-200 dark:bg-gray-800 flex justify-center items-center relative overflow-hidden transition-all duration-500" style={{ height: '600px' }}>
            <div className={`bg-white transition-all duration-500 h-full w-full shadow-lg ${isMobile ? 'max-w-[375px] h-[95%] rounded-[2rem] border-[8px] border-gray-900 dark:border-black overflow-hidden' : ''}`}>
              {/* Optional dynamic key to force iframe reload if needed, but not required */}
              <iframe 
                key={activeTab.id}
                src={activeTab.url} 
                title={activeTab.name}
                className="w-full h-full border-none bg-white"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </div>
          
          {/* Footer bar */}
          <div className="flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-black border-t border-primary/20">
            <span className="text-xs font-mono text-gray-500">Status: 200 OK | Render: {isMobile ? 'Mobile' : 'Desktop'}</span>
            <a 
              href={activeTab.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-gray-900 dark:text-white hover:text-primary transition-colors"
            >
              <ExternalLink size={14} /> Open full site
            </a>
          </div>
        </div>

      </div>
      <div className="text-primary dark:text-primary font-semibold tracking-wide text-sm">&rbrace;;</div>
    </div>
  );
}
