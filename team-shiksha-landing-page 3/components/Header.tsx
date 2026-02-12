import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-200 py-3'
        : 'bg-transparent border-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Team Shiksha Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-shiksha transition-colors">
              Team Shiksha
            </span>
          </a>

          {/* Join Us Button */}
          <a
            href="https://app.team.shiksha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-shiksha hover:bg-shiksha-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-shiksha/20 hover:shadow-shiksha/40 hover:-translate-y-0.5 flex items-center gap-2"
          >
            Join Us <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;