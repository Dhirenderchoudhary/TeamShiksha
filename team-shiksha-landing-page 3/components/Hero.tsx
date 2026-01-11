import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-shiksha text-xs font-semibold uppercase tracking-wide mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shiksha opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-shiksha"></span>
            </span>
            Community Open for Everyone
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
            A Growth Community For <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shiksha to-blue-500">
              Learning in Public
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of curious minds sharing their learning journey. 
            Accelerate your career, build your network, and grow faster by showing your work to the world.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://team.shiksha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-shiksha text-white rounded-xl font-bold text-lg hover:bg-shiksha-dark transition-all duration-300 shadow-xl shadow-shiksha/20 hover:-translate-y-1 hover:shadow-shiksha/30 flex items-center justify-center gap-2 group"
            >
              Become a Member
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#join"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2"
            >
              How it works
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-16 flex items-center justify-center gap-8 text-gray-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {/* Simple visual placeholders for "Trust" indicators or stats */}
             <div className="flex flex-col items-center">
                <Users size={32} className="mb-2 text-shiksha" />
                <span className="font-bold text-2xl text-gray-800">25k+</span>
                <span className="text-xs font-medium uppercase tracking-wider">Members</span>
             </div>
             <div className="w-px h-12 bg-gray-200"></div>
             <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-gray-800">100+</div>
                <span className="text-xs font-medium uppercase tracking-wider">Projects</span>
             </div>
             <div className="w-px h-12 bg-gray-200"></div>
             <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-gray-800">∞</div>
                <span className="text-xs font-medium uppercase tracking-wider">Learning</span>
             </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Hero;