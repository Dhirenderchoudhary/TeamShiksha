import React from 'react';
import { Youtube, Instagram, Linkedin, Github, Twitter, Send, ArrowUpRight, Megaphone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Custom icons or mapping Lucide icons to look distinct
const socialLinks = [
  {
    name: 'Community',
    desc: 'Join our WhatsApp community',
    icon: <MessageCircleIcon className="w-8 h-8" />,
    href: 'https://chat.whatsapp.com/E2HIDxt9I8WIUTTnWG9iXk',
    color: 'bg-green-500',
    hoverColor: 'text-green-600',
    accent: '#25D366'
  },
  {
    name: 'Channel',
    desc: 'Official updates on WhatsApp',
    icon: <Megaphone className="w-8 h-8" />,
    href: 'https://whatsapp.com/channel/0029Va8htM62f3EMOZ5JzR3T',
    color: 'bg-emerald-500',
    hoverColor: 'text-emerald-600',
    accent: '#10B981'
  },
  {
    name: 'Telegram',
    desc: 'Latest news & discussions',
    icon: <Send className="w-8 h-8" />,
    href: 'https://t.me/teamshiksha',
    color: 'bg-sky-500',
    hoverColor: 'text-sky-600',
    accent: '#0EA5E9'
  },
  {
    name: 'YouTube',
    desc: 'Watch our tutorials',
    icon: <Youtube className="w-8 h-8" />,
    href: 'https://youtube.com/@teamshiksha',
    color: 'bg-red-500',
    hoverColor: 'text-red-600',
    accent: '#EF4444'
  },
  {
    name: 'Instagram',
    desc: 'Follow our journey',
    icon: <Instagram className="w-8 h-8" />,
    href: 'https://instagram.com/teamshiksha',
    color: 'bg-pink-600',
    hoverColor: 'text-pink-600',
    accent: '#E1306C'
  },
  {
    name: 'LinkedIn',
    desc: 'Professional network',
    icon: <Linkedin className="w-8 h-8" />,
    href: 'https://linkedin.com/company/teamshiksha/',
    color: 'bg-blue-700',
    hoverColor: 'text-blue-700',
    accent: '#0077B5'
  },
  {
    name: 'X / Twitter',
    desc: 'Quick updates & news',
    icon: <Twitter className="w-8 h-8" />,
    href: 'https://x.com/teamshiksha',
    color: 'bg-black',
    hoverColor: 'text-black',
    accent: '#000000'
  },
  {
    name: 'GitHub',
    desc: 'Open source projects',
    icon: <Github className="w-8 h-8" />,
    href: 'https://github.com/TeamShiksha',
    color: 'bg-gray-800',
    hoverColor: 'text-gray-900',
    accent: '#333333'
  },
];

// Helper for WhatsApp icon not in Lucide default
function MessageCircleIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      className={className}
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

const Socials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our diverse community across platforms. Stay updated with news, tutorials, and resources.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <ScrollReveal key={link.name} delay={index * 0.05}>
              <a 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 overflow-hidden"
              >
                {/* Accent border on hover */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-2" 
                  style={{ backgroundColor: link.accent }}
                />

                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                  style={{ backgroundColor: link.accent }}
                >
                  {React.cloneElement(link.icon as React.ReactElement, { size: 20 })}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 truncate group-hover:text-shiksha transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {link.desc}
                  </p>
                </div>

                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 transition-colors" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;