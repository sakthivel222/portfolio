import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, GraduationCap, Award, Trophy, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTASection } from '../components/CTASection';
import { PERSONAL_INFO, CERTIFICATIONS, ACHIEVEMENTS, SKILL_CATEGORIES } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Navbar />

      <div className="pt-28 pb-10">
        {/* Back to Home Pill Button */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-8">
          <Link href="/">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 cursor-pointer group select-none"
            >
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-lime-400 group-hover:bg-lime-400/10 transition-all duration-200">
                <ArrowLeft size={16} className="text-white/60 group-hover:text-lime-400 transition-colors" />
              </span>
              <span className="font-londrina text-[19px] font-light text-white/50 group-hover:text-lime-400 transition-colors duration-200 tracking-wide">
                Back to Home
              </span>
            </motion.span>
          </Link>
        </section>

        {/* Page Header */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -1 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-block bg-lime-400 px-4 py-1 mb-4 select-none"
          >
            <span className="font-league text-[24px] tracking-[3px] text-black font-normal uppercase">
              ABOUT SAKTHIVEL R
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-league font-normal leading-none tracking-[4px] text-white text-[72px] sm:text-[110px] md:text-[150px] lg:text-[180px] uppercase select-none"
          >
            MY STORY
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-lime-400 mt-3 w-full max-w-[600px]"
          />
        </section>

        {/* Bio & Education Split Section */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            {/* Extended Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-[36px] bg-[#0a0a0a] border border-white/10"
            >
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover border-2 border-lime-400 shadow-[0_0_20px_rgba(173,235,51,0.25)] shrink-0"
                />
                <div>
                  <h2 className="font-anton text-2xl sm:text-4xl text-white uppercase flex flex-wrap items-center gap-2">
                    <span>Building AI That Solves</span>
                    <span className="text-lime-400">Real Problems</span>
                  </h2>
                  <span className="font-londrina text-[18px] text-lime-400 block mt-1">
                    ● {PERSONAL_INFO.status}
                  </span>
                </div>
              </div>

              <div className="font-londrina text-[21px] font-light text-white/70 space-y-5 leading-relaxed">
                <p>
                  I'm an <span className="text-white font-normal">Artificial Intelligence & Machine Learning Engineering student</span> at <span className="text-lime-400 font-normal">Rajalakshmi Institute of Technology</span> in Chennai.
                </p>
                <p>
                  I enjoy exploring <span className="text-white font-normal">Generative AI, NLP, and Retrieval-Augmented Generation</span>, pairing conceptual theory with hands-on Full Stack development. Most of what I know, I've learned through building — hackathons, production prototypes, and countless late-night debugging marathons.
                </p>
                <p>
                  I strive to stay humble about what I know and relentlessly curious about what I don't. I'm quick to learn, communicative in collaborative environments, and care deeply about code readability.
                </p>
                <p className="text-lime-400 font-normal pt-2">
                  Actively seeking AI/ML or Software Development internship opportunities where I can deliver value from Day 1 and learn from experienced engineers.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-lime-400 text-black px-7 py-3.5 font-londrina text-[20px] font-normal shadow-lg hover:brightness-110 transition-all"
                >
                  <Download size={18} />
                  <span>Download Resume (PDF)</span>
                </a>
                <Link href="/work">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-7 py-3.5 font-londrina text-[20px] font-light text-white cursor-pointer transition-colors">
                    <span>Inspect Projects</span>
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Academic Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-8 sm:p-10 rounded-[36px] bg-[#0a0a0a] border border-lime-400/30 shadow-[0_0_50px_rgba(173,235,51,0.08)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-lime-400/20 border border-lime-400/40 flex items-center justify-center text-lime-400">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <span className="font-londrina text-[15px] font-light text-lime-400 uppercase tracking-widest block">
                    Higher Education
                  </span>
                  <h3 className="font-anton text-2xl text-white uppercase">
                    Formal Engineering Degree
                  </h3>
                </div>
              </div>

              <div className="space-y-4 font-londrina">
                <div>
                  <h4 className="text-[24px] font-normal text-white">
                    {PERSONAL_INFO.degree}
                  </h4>
                  <p className="text-[19px] font-light text-lime-400 mt-1">
                    {PERSONAL_INFO.college}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-[17px] font-light text-white/50 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-lime-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </span>
                  <span>Batch: {PERSONAL_INFO.batch}</span>
                  <span className="px-3 py-0.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/30">
                    Currently Pursuing
                  </span>
                </div>

                <p className="text-[18px] font-light text-white/60 pt-4 leading-relaxed">
                  Focusing on Advanced Machine Learning, Artificial Neural Networks, Data Structures & Algorithms, Natural Language Processing, and Distributed Systems.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Verified Industry Certifications Section */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
              CREDENTIALS & KNOWLEDGE
            </div>
            <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
              VERIFIED CERTIFICATIONS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -6 }}
                className="p-8 rounded-[32px] bg-[#0a0a0a] border border-white/10 hover:border-lime-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow"
                      style={{ backgroundColor: `${cert.accent}20` }}
                    >
                      <Award size={24} style={{ color: cert.accent }} />
                    </div>
                    <span
                      className="font-londrina text-[14px] uppercase tracking-wider px-3 py-1 rounded-full border"
                      style={{ borderColor: `${cert.accent}40`, color: cert.accent }}
                    >
                      {cert.badgeText}
                    </span>
                  </div>

                  <h3 className="font-anton text-2xl text-white uppercase mb-2">
                    {cert.title}
                  </h3>
                  <p className="font-londrina text-[18px] text-lime-400 mb-4">
                    Issued by {cert.issuer} • {cert.year}
                  </p>
                  <p className="font-londrina text-[17px] font-light text-white/50 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 font-londrina text-[15px] font-light text-white/40">
                  <CheckCircle size={16} className="text-lime-400" />
                  <span>Credential Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hackathon Milestones & Competitions */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
              MILESTONES & EXPERIENCE
            </div>
            <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
              HACKATHONS & COMPETITIONS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach) => (
              <motion.div
                key={ach.id}
                whileHover={{ y: -6 }}
                className="p-8 rounded-[32px] bg-[#0a0a0a] border border-white/10 hover:border-lime-400/40 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-lime-400/15 border border-lime-400/30 flex items-center justify-center text-lime-400 mb-6">
                  <Trophy size={24} />
                </div>
                <h3 className="font-anton text-2xl text-white uppercase mb-2">
                  {ach.title}
                </h3>
                <span className="font-londrina text-[15px] font-light text-lime-400 uppercase tracking-widest block mb-4">
                  {ach.category}
                </span>
                <ul className="space-y-3 font-londrina text-[17px] font-light text-white/60">
                  {ach.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-lime-400 font-bold mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Full Technical Toolbox */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
              COMPLETE SKILL INVENTORY
            </div>
            <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
              THE FULL TOOLBOX
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="p-8 rounded-[32px] bg-[#0a0a0a] border border-white/10 hover:border-lime-400/30 transition-all"
              >
                <h3 className="font-anton text-2xl text-white uppercase mb-4 text-lime-400">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-londrina text-[16px] font-light px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/80 hover:text-lime-400 hover:border-lime-400/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="LOOKING FOR A DEDICATED INTERN?"
          subtitle="Let's discuss how I can contribute to your engineering team."
          buttonText="Contact Sakthivel →"
        />
      </div>

      <Footer />
    </main>
  );
};
