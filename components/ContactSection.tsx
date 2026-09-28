import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface ContactSectionProps {
  email?: string;
  github?: string;
  linkedin?: string;
  additionalLinks?: SocialLink[];
  onContactClick?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email = 'hello@example.com',
  github = 'https://github.com',
  linkedin = 'https://linkedin.com',
  additionalLinks = [],
  onContactClick,
}) => {
  const socialLinks: SocialLink[] = [
    ...(email
      ? [
          {
            name: 'Email',
            url: `mailto:${email}`,
            icon: <Mail className="w-5 h-5" />,
          },
        ]
      : []),
    ...(github
      ? [
          {
            name: 'GitHub',
            url: github,
            icon: <Github className="w-5 h-5" />,
          },
        ]
      : []),
    ...(linkedin
      ? [
          {
            name: 'LinkedIn',
            url: linkedin,
            icon: <Linkedin className="w-5 h-5" />,
          },
        ]
      : []),
    ...additionalLinks,
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      {/* Main Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold">Let's work together</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out if you'd like to collaborate.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 hover:bg-blue-600 transition-colors font-medium"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <span className="text-red-500">❤</span>
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
