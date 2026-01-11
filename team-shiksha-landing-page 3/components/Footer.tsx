import React from 'react';
import { Youtube, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-shiksha via-blue-400 to-shiksha" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="bg-shiksha text-white p-1.5 rounded-md">
                 <span className="font-bold text-sm">TS</span>
               </div>
               <h3 className="text-xl font-bold text-white">Team Shiksha</h3>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Empowering learners through community-driven education and resources. Join us in our mission to make learning accessible to everyone.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://youtube.com/@teamshiksha" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com/teamshiksha" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/company/teamshiksha" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/TeamShiksha" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-gray-100 hover:text-black transition-all duration-300">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-shiksha-light">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Roadmaps', 'Projects', 'Mock Interviews'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-shiksha-light">
              Resources
            </h4>
            <ul className="space-y-3">
              {['Blog', 'Tutorials', 'Documentation', 'Community Guidelines', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-shiksha-light">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="opacity-60">Email:</span>
                <a href="mailto:contact@teamshiksha.com" className="hover:text-white transition-colors">contact@teamshiksha.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="opacity-60">Phone:</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="opacity-60">Address:</span>
                <span>123 Learning St.<br/>Education City, 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Team Shiksha. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;