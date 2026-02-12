import React from 'react';
import { Target, Zap, Rocket, GraduationCap, Users, Calendar, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-purple-50 to-transparent opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-shiksha font-bold tracking-wide uppercase text-sm mb-3">About The Community</h2>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                            Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-shiksha to-purple-600">Tech Career</span>
                        </h3>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: What is Team Shiksha? */}
                    <ScrollReveal delay={0.1} className="h-full">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col group hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>

                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:rotate-6 transition-transform duration-300">
                                <GraduationCap className="w-7 h-7 text-blue-600" />
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 mb-4 relative z-10">What is Team Shiksha?</h4>
                            <p className="text-gray-600 leading-relaxed flex-grow relative z-10">
                                TeamShiksha is a collaborative learning community focused on improving skills in frontend development, backend engineering, data structures, and system design. It offers structured mentorship, coding challenges, and guided learning paths tailored for developers who want to grow technically and professionally.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Card 2: How does it work? */}
                    <ScrollReveal delay={0.2} className="h-full">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col group hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>

                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:rotate-6 transition-transform duration-300">
                                <Users className="w-7 h-7 text-purple-600" />
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 mb-4 relative z-10">How does it work?</h4>
                            <p className="text-gray-600 leading-relaxed flex-grow relative z-10">
                                TeamShiksha organizes members into small focused teams, each led by a mentor. These teams follow a shared curriculum and meet regularly (often weekly) to learn, build, and support each other. Topics range from web development to system design. The community also hosts discussions, assignments, and Q&A sessions — all designed to accelerate hands-on learning.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Card 3: How do I join? */}
                    <ScrollReveal delay={0.3} className="h-full">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col group hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>

                            <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:rotate-6 transition-transform duration-300">
                                <Rocket className="w-7 h-7 text-pink-600" />
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 mb-4 relative z-10">How to Join & Contribute?</h4>
                            <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                                To join TeamShiksha, you can start by visiting the official website. Check for open applications or invites to join projects, complete the assignment, and join a team full of enthusiastic developers.
                            </p>

                            <a
                                href="https://team.shiksha/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-shiksha font-bold hover:gap-3 transition-all mt-auto group-hover:text-shiksha-dark relative z-10"
                            >
                                Visit Website <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
};

export default About;
