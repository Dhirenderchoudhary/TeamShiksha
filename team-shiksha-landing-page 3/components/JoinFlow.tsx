import React from 'react';
import { MessageSquare, UserPlus, CheckCircle2, Trophy, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    number: 1,
    title: 'Join Discord',
    description: 'Open our Discord server to begin your journey.',
    icon: <MessageSquare className="w-8 h-8" />,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    number: 2,
    title: 'Request to Join',
    description: 'Go to #request-to-join channel and introduce yourself.',
    icon: <UserPlus className="w-8 h-8" />,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    number: 3,
    title: 'Get Verified',
    description: "We'll review your request to ensure you're a real human.",
    icon: <CheckCircle2 className="w-8 h-8" />,
    color: 'bg-green-50 text-green-600',
  },
  {
    number: 4,
    title: "You're In!",
    description: 'Welcome to Team Shiksha! Start learning & sharing.',
    icon: <Trophy className="w-8 h-8" />,
    color: 'bg-amber-50 text-amber-600',
  },
];

const JoinFlow: React.FC = () => {
  return (
    <section id="join" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-shiksha via-blue-400 to-shiksha opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              How to Join Team Shiksha
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Become part of our growing community of learners and educators in just a few simple steps.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.15}>
                <div className="group h-full">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 h-full flex flex-col items-center text-center relative hover:-translate-y-2">
                    
                    {/* Step Number Badge */}
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-50 text-shiksha font-bold text-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-shiksha group-hover:text-white group-hover:border-shiksha/30 transition-all duration-300 absolute -top-6">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`p-4 rounded-xl ${step.color} mb-6 mt-4 transition-transform duration-300 group-hover:scale-110`}>
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-shiksha transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <ScrollReveal delay={0.6}>
            <a 
              href="https://app.team.shiksha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-shiksha text-white font-bold rounded-xl hover:bg-shiksha-dark transition-all duration-300 shadow-lg shadow-shiksha/25 hover:shadow-xl hover:shadow-shiksha/30 hover:-translate-y-1"
            >
              <MessageSquare className="w-5 h-5" />
              Join the Discord Server
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default JoinFlow;