import React from 'react';
import { Youtube, Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-shiksha via-blue-400 to-shiksha" />

      {/* Decorative gradient orbs */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-shiksha/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content - Centered */}
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Team Shiksha Logo" className="h-10 w-auto shadow-lg shadow-shiksha/30 rounded-lg" />
            <h3 className="text-2xl font-bold text-white">Team Shiksha</h3>
          </div>

          {/* Tagline */}
          <p className="text-base leading-relaxed max-w-md opacity-80">
            Empowering learners through community-driven education and resources. Join us in our mission to make learning accessible to everyone.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://youtube.com/@teamshiksha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-red-600 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://instagram.com/teamshiksha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com/company/teamshiksha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/TeamShiksha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-slate-800/60 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
          <p className="opacity-60">&copy; {new Date().getFullYear()} Team Shiksha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;