import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400/20 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 text-shiksha text-xs font-bold uppercase tracking-wide mb-6 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shiksha opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-shiksha"></span>
            </span>
            Community Open for Everyone
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-6">
            A Growth Community For <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shiksha via-blue-600 to-purple-600 animate-gradient-x">
              Learning in Public
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
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
              className="w-full sm:w-auto px-8 py-4 bg-shiksha text-white rounded-xl font-bold text-lg hover:bg-shiksha-dark transition-all duration-300 shadow-xl shadow-shiksha/25 hover:-translate-y-1 hover:shadow-shiksha/40 flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">
                Become a Member
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#join"
              className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-white hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              How it works
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex flex-col items-center">
              <Users size={32} className="mb-2 text-shiksha" />
              <span className="font-bold text-2xl text-gray-800">5000+</span>
              <span className="text-xs font-medium uppercase tracking-wider">Members</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-gray-800">10+</div>
              <span className="text-xs font-medium uppercase tracking-wider">Projects</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-gray-800">∞</div>
              <span className="text-xs font-medium uppercase tracking-wider">Learning</span>
            </div>
          </div>
        </ScrollReveal>

      </div >
    </section >
  );
};

export default Hero;