import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Roadmaps', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Mock Interviews', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-200 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-shiksha text-white p-2 rounded-lg group-hover:bg-shiksha-dark transition-colors duration-300">
               <span className="font-bold text-lg leading-none">TS</span>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-shiksha transition-colors">
              Team Shiksha
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-shiksha relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-shiksha transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href="https://app.team.shiksha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-shiksha hover:bg-shiksha-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-shiksha/20 hover:shadow-shiksha/40 hover:-translate-y-0.5 flex items-center gap-2"
            >
              Join Us <ExternalLink size={14} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-shiksha transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-medium text-gray-800 hover:text-shiksha w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://app.team.shiksha"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-shiksha text-white w-full max-w-xs py-3 rounded-lg font-semibold text-center mt-4 shadow-md active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;