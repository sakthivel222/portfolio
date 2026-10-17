import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "WANT SOMETHING LIKE THIS?",
  subtitle = "Let's build your next AI or full-stack project together.",
  buttonText = "Get In Touch →",
}) => {
  return (
    <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 my-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[36px] bg-lime-400 px-8 py-14 sm:px-16 sm:py-20 text-center shadow-[0_0_60px_rgba(173,235,51,0.25)]"
      >
        {/* Soft radial glow accents */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-black/15 blur-3xl" />

        <h2 className="relative z-10 font-league font-normal text-black leading-none text-[46px] sm:text-[70px] md:text-[92px] tracking-[3px] uppercase">
          {title}
        </h2>

        <p className="relative z-10 mt-4 font-londrina font-light text-black/80 text-[22px] sm:text-[28px] max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="relative z-10 mt-8">
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.05, backgroundColor: '#000000', color: '#adeb33' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.22 }}
              className="inline-flex items-center gap-2 rounded-full bg-black text-lime-400 px-10 py-4 font-londrina text-[22px] font-normal tracking-wide cursor-pointer shadow-xl"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
