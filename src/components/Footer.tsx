import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Sparkles, Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterLinkItem {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const FOOTER_LINKS: Record<string, FooterLinkItem[]> = {
    Explore: [
      { label: 'Work & Projects', href: '/work' },
      { label: 'Technical Services', href: '/services' },
      { label: 'About & Journey', href: '/about' },
      { label: 'Get in Touch', href: '/contact' },
    ],
    Capabilities: [
      { label: 'Generative AI & RAG', href: '/work' },
      { label: 'Full Stack Web Apps', href: '/work' },
      { label: 'Machine Learning & NLP', href: '/work' },
      { label: 'FastAPI & Cloud Backend', href: '/work' },
    ],
    Connect: [
      { label: 'Email Sakthivel', href: `mailto:${PERSONAL_INFO.email}`, external: true },
      { label: 'GitHub Profile', href: PERSONAL_INFO.github, external: true },
      { label: 'LinkedIn Network', href: PERSONAL_INFO.linkedin, external: true },
      { label: 'Download Resume', href: PERSONAL_INFO.resumeUrl, download: true },
    ]
  };

  return (
    <footer className="relative mt-24 w-full overflow-hidden border-t border-white/10 bg-black">
      {/* Ambient background lime blur glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-lime-400/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center text-black font-black">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <span className="font-league text-3xl tracking-[3px] font-normal text-white uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="font-londrina text-[19px] font-light text-white/50 leading-relaxed mb-6 max-w-[320px]">
              Designing & engineering real-world AI applications where deep curiosity meets clean full-stack execution.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, color: '#adeb33' }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-lime-400 hover:border-lime-400/40 transition-colors"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, color: '#adeb33' }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-lime-400 hover:border-lime-400/40 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                whileHover={{ scale: 1.2, color: '#adeb33' }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-lime-400 hover:border-lime-400/40 transition-colors"
              >
                <Mail size={18} />
              </motion.a>
              <motion.a
                href={`tel:${PERSONAL_INFO.phone}`}
                aria-label="Phone"
                whileHover={{ scale: 1.2, color: '#adeb33' }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-lime-400 hover:border-lime-400/40 transition-colors"
              >
                <Phone size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
            >
              <h4 className="font-londrina text-lime-400 text-xl font-normal tracking-wider uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3 font-londrina text-[18px] font-light">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/50 hover:text-lime-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : link.download ? (
                      <a
                        href={link.href}
                        download
                        className="text-white/50 hover:text-lime-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <span className="text-white/50 hover:text-lime-400 transition-colors cursor-pointer">
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-londrina text-[16px] font-light text-white/40">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. Built with neo-brutalist precision.
          </div>
          <div className="flex items-center gap-6">
            <span>Rajalakshmi Institute of Technology • Chennai</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-lime-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
