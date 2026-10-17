import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Download, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/#home' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'skills', label: 'Skills', href: '/#skills' },
  { id: 'projects', label: 'Projects', href: '/#projects' },
  { id: 'education', label: 'Education', href: '/#education' },
  { id: 'certifications', label: 'Certifications', href: '/#certifications' },
  { id: 'achievements', label: 'Achievements', href: '/#achievements' },
  { id: 'why-hire-me', label: 'Why Hire Me', href: '/#why-hire-me' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [location] = useLocation();

  // Scrollspy to detect which section is currently on screen
  useEffect(() => {
    if (location !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavClick = (id: string, e?: React.MouseEvent) => {
    setMobileMenuOpen(false);
    setActiveSection(id);

    if (location === '/') {
      if (e) e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-6 lg:px-10 py-3 backdrop-blur-md bg-black/85 border-b border-white/10"
    >
      {/* Brand Logo */}
      <Link href="/" onClick={() => handleNavClick('home')} className="flex items-center gap-2.5 group shrink-0">
        <motion.div
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center text-black font-black text-sm select-none shadow-[0_0_15px_rgba(173,235,51,0.4)]"
        >
          <Sparkles className="w-4 h-4 text-black" />
        </motion.div>
        <span className="font-league text-xl sm:text-2xl tracking-[2px] text-white group-hover:text-lime-400 transition-colors uppercase">
          {PERSONAL_INFO.name}
          <span className="text-lime-400">.</span>
        </span>
      </Link>

      {/* Center Nav Bar Pill Container matching reference screenshot media_1792229739475.png */}
      <nav className="hidden lg:flex items-center justify-center overflow-x-auto px-2 py-1" aria-label="Primary">
        <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-full bg-[#181818]/90 border border-white/10 shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`relative px-3.5 py-1.5 rounded-full text-[15px] xl:text-[16px] font-sans font-medium transition-all duration-200 select-none whitespace-nowrap ${
                  isActive
                    ? 'bg-[#382115] text-[#f5ebd7] border border-[#6d3e26] shadow-sm font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-[#382115] border border-[#6d3e26] -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Right Quick Actions: Download Resume Button */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <a
          href="/resume.pdf"
          download="Sakthivel_R_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-lime-400 text-black px-3.5 sm:px-4 py-1.5 font-sans text-[13px] sm:text-[14px] font-bold hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(173,235,51,0.25)]"
        >
          <Download size={14} className="stroke-[2.5]" />
          <span>Resume</span>
        </a>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white hover:text-lime-400 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 lg:hidden shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`px-4 py-2.5 rounded-xl font-sans text-[17px] transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#382115] text-[#f5ebd7] border border-[#6d3e26] font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-lime-400" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10">
                <a
                  href="/resume.pdf"
                  download="Sakthivel_R_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 text-black py-3 font-sans text-[16px] font-bold"
                >
                  <Download size={18} />
                  <span>Download Full Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
