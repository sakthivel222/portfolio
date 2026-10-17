import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Code,
  Cpu,
  Database,
  Server,
  Terminal,
  Sparkles,
  Download,
  GraduationCap,
  Award,
  Trophy,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  ExternalLink,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectModal } from '../components/ProjectModal';
import {
  PERSONAL_INFO,
  PROJECTS,
  STATS,
  WHY_HIRE_ME,
  SKILL_CATEGORIES,
  CERTIFICATIONS,
  ACHIEVEMENTS,
  WORK_CATEGORIES,
  Project
} from '../data/portfolioData';

const MARQUEE_ITEMS = [
  "ARTIFICIAL INTELLIGENCE",
  "MACHINE LEARNING",
  "FULL STACK WEB",
  "PYTHON",
  "REACT.JS",
  "FASTAPI",
  "TENSORFLOW",
  "LANGCHAIN & RAG",
  "DATA STRUCTURES & ALGORITHMS",
  "JAVA & C++",
  "POSTGRESQL",
  "AUTONOMOUS ROBOTICS",
  "NLP & LLMs",
];

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalId, setActiveModalId] = useState<number | null>(null);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const activeProject = PROJECTS.find((p) => p.id === activeModalId) ?? null;
  const projectIds = PROJECTS.map((p) => p.id);
  const currentIndex = activeModalId !== null ? projectIds.indexOf(activeModalId) : -1;

  const handleOpenModal = (id: number) => {
    setActiveModalId(id);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setActiveModalId(null);
    document.body.style.overflow = '';
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      handleOpenModal(projectIds[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < projectIds.length - 1) {
      handleOpenModal(projectIds[currentIndex + 1]);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/sakthivel.aiml@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Portfolio Contact Message",
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        window.location.href = `mailto:sakthivel.aiml@gmail.com?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
        )}`;
        setIsSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:sakthivel.aiml@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden selection:bg-lime-400 selection:text-black">
      <Navbar />

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={handleCloseModal}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < projectIds.length - 1}
      />

      {/* ============================================================== */}
      {/* 1. HERO SECTION (#home) */}
      {/* ============================================================== */}
      <motion.section id="home" className="relative min-h-screen pt-24 overflow-hidden flex flex-col justify-between" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        {/* Ambient Top Glow Orbs */}
        <motion.div
          animate={{ scale: [1, 1.35, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[12%] top-[380px] z-0 h-72 w-72 rounded-full bg-lime-400/20 blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.35, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute right-[12%] top-[450px] z-0 h-72 w-72 rounded-full bg-lime-400/20 blur-[120px] pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto flex max-w-[1512px] flex-col items-center px-4 sm:px-8 pt-8 sm:pt-12 pb-10 z-10"
        >
          {/* Main Typography Header: PORT [Cutout Avatar] FOLIO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-10 relative flex items-end justify-center select-none"
          >
            {/* PORT Section */}
            <div className="relative pb-2">
              {/* Slanted Lime Sticker Badge */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="absolute -top-[34px] sm:-top-[48px] -left-2 z-30 cursor-pointer"
              >
                <div className="h-[32px] sm:h-[42px] px-4 sm:px-6 -rotate-[8deg] bg-lime-400 rounded-sm shadow-[0_4px_20px_rgba(173,235,51,0.4)] flex items-center justify-center">
                  <span className="font-league text-[20px] sm:text-[28px] font-normal tracking-[2.5px] text-black uppercase whitespace-nowrap">
                    AI & ML ENGINEER
                  </span>
                </div>
              </motion.div>

              <span className="font-league font-normal leading-none tracking-[2px] sm:tracking-[6px] text-white text-[85px] sm:text-[140px] md:text-[190px] lg:text-[250px] xl:text-[300px]">
                P<span className="relative inline-block">O<span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-lime-400 shadow-[0_0_18px_#adeb33] animate-pulse"></span></span>RT
              </span>
            </div>

            {/* Sakthivel Portrait Transparent Cutout with subtle floating breath effect */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 w-[140px] sm:w-[220px] md:w-[280px] lg:w-[350px] xl:w-[410px] -mx-3 sm:-mx-6 self-end flex items-end justify-center pointer-events-none"
            >
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src="/profile-cutout.png"
                alt={PERSONAL_INFO.name}
                className="w-full h-auto object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.98)] filter contrast-110"
              />
            </motion.div>

            {/* FOLIO Section */}
            <div className="relative pb-2">
              <span className="font-league font-normal leading-none tracking-[2px] sm:tracking-[6px] text-white text-[85px] sm:text-[140px] md:text-[190px] lg:text-[250px] xl:text-[300px]">
                FOLIO
              </span>

              {/* Bottom Lime Pill Badge: Available for Internships */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] },
                  y: { repeat: Infinity, duration: 3, ease: 'easeInOut' }
                }}
                whileHover={{ scale: 1.06 }}
                className="absolute -bottom-[28px] sm:-bottom-[36px] -right-2 z-30 cursor-pointer"
              >
                <div className="inline-flex items-center gap-2 rounded-lg sm:rounded-xl bg-lime-400 px-3.5 py-1 sm:px-6 sm:py-2 shadow-[0_0_30px_rgba(173,235,51,0.45)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping" />
                  <span className="font-londrina text-[17px] sm:text-[24px] md:text-[27px] font-normal tracking-wide text-black uppercase whitespace-nowrap">
                    Available for Internships
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Subtitle Bio statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-14 sm:mt-18 max-w-3xl text-center"
          >
            <p className="font-londrina text-[22px] sm:text-[28px] font-light text-white/75 leading-snug">
              Hi, I'm <span className="text-lime-400 font-normal">{PERSONAL_INFO.name}</span>. An Artificial Intelligence & Machine Learning Engineering student at Rajalakshmi Institute of Technology with hands-on knowledge in Python, Java, C++, and Full Stack Development.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 text-black px-7 py-3 font-londrina text-[21px] font-normal cursor-pointer shadow-[0_0_35px_rgba(173,235,51,0.35)] hover:brightness-110 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Sakthivel_R_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-lime-400/60 bg-lime-400/10 hover:bg-lime-400 hover:text-black text-lime-400 px-7 py-3 font-londrina text-[21px] font-normal cursor-pointer shadow-lg transition-all"
              >
                <Download size={19} />
                <span>Download Resume (PDF)</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-7 py-3 font-londrina text-[21px] font-light text-white cursor-pointer transition-colors"
              >
                <span>Get in Touch</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Brutalist Oscilloscope / ECG Heartbeat Line */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 mt-4 pb-4 select-none">
          <div className="relative flex items-center justify-between">
            <div className="flex-1 h-[45px] relative">
              <svg className="w-full h-full stroke-white/25 fill-none" preserveAspectRatio="none" viewBox="0 0 400 45">
                <path d="M 0,15 L 180,15 L 220,38 L 400,38" strokeWidth="1.5" />
              </svg>
            </div>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="px-5 sm:px-8 flex flex-col items-center"
            >
              <span className="font-league text-[14px] sm:text-[17px] tracking-[4px] text-lime-400 uppercase">
                SCROLL
              </span>
            </motion.div>
            <div className="flex-1 h-[45px] relative">
              <svg className="w-full h-full stroke-white/25 fill-none" preserveAspectRatio="none" viewBox="0 0 400 45">
                <path d="M 0,38 L 70,38 L 85,5 L 98,42 L 110,22 L 120,38 L 400,38" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ============================================================== */}
      {/* INFINITE SCROLLING TECH TICKER / MARQUEE */}
      {/* ============================================================== */}
      <div className="w-full border-y border-white/10 bg-[#070707] py-4 overflow-hidden flex items-center select-none shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
        <motion.div
          animate={{ x: [0, -1600] }}
          transition={{ ease: "linear", duration: 28, repeat: Infinity }}
          className="flex whitespace-nowrap gap-8 items-center"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-league text-[22px] sm:text-[26px] tracking-[3px] text-white/70 uppercase hover:text-lime-400 transition-colors cursor-default">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_10px_#adeb33]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Counter Ribbon */}
      <section className="mx-auto max-w-[1400px] px-6 sm:px-10 my-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(173,235,51,0.5)', boxShadow: '0 10px 30px -10px rgba(173,235,51,0.2)' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-[28px] bg-[#0a0a0a] border border-white/10 text-center transition-all cursor-default group"
            >
              <div className="font-anton text-4xl sm:text-5xl text-lime-400 tracking-tight group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="font-londrina text-lg sm:text-xl font-light text-white/50 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. ABOUT SECTION (#about) */}
      {/* ============================================================== */}
      <section id="about" className="mx-auto max-w-[1400px] px-6 sm:px-10 pt-20 mb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
            ABOUT SAKTHIVEL R
          </div>
          <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
            PROFESSIONAL SUMMARY
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-lime-400 mt-3 max-w-[420px]"
          />
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
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
                <h3 className="font-anton text-2xl sm:text-3xl text-white uppercase">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="font-londrina text-[19px] text-lime-400">
                  {PERSONAL_INFO.role} | Full Stack Development
                </p>
                <span className="font-londrina text-[16px] text-white/50 block mt-0.5">
                  📍 {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            <div className="font-londrina text-[20px] sm:text-[21px] font-light text-white/70 space-y-4 leading-relaxed border-t border-white/10 pt-6">
              <p>
                {PERSONAL_INFO.extendedBio}
              </p>
              <p className="text-lime-400 font-normal">
                ● Currently available for AI/ML and Software Development internship opportunities.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center">
              <a
                href="/resume.pdf"
                download="Sakthivel_R_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 text-black px-7 py-3.5 font-londrina text-[20px] font-normal shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <Download size={18} />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 font-londrina text-[19px] text-white transition-colors"
              >
                <Linkedin size={18} className="text-[#0a66c2]" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 font-londrina text-[19px] text-white transition-colors"
              >
                <Github size={18} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Academic Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-8 sm:p-10 rounded-[36px] bg-[#0a0a0a] border border-lime-400/30 shadow-[0_0_40px_rgba(173,235,51,0.06)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-lime-400/20 border border-lime-400/40 flex items-center justify-center text-lime-400">
                <GraduationCap size={26} />
              </div>
              <div>
                <span className="font-londrina text-[14px] text-lime-400 uppercase tracking-widest block">
                  Academic Pursuit
                </span>
                <h3 className="font-anton text-2xl text-white uppercase">
                  B.E – AIML
                </h3>
              </div>
            </div>

            <div className="space-y-4 font-londrina">
              <div>
                <span className="text-[14px] text-white/40 uppercase tracking-wider block">Institution</span>
                <h4 className="text-[22px] font-normal text-white">
                  {PERSONAL_INFO.college}
                </h4>
                <p className="text-[17px] text-lime-400">{PERSONAL_INFO.location}</p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="text-[14px] text-white/40 uppercase tracking-wider block">Duration & Status</span>
                <p className="text-[19px] text-white">{PERSONAL_INFO.batch}</p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="text-[14px] text-white/40 uppercase tracking-wider block">Core Strengths</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Python", "Java", "C++", "DSA", "RAG & NLP", "Full-Stack Web", "Machine Learning"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-[14px] bg-white/5 border border-white/10 text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SKILLS SECTION (#skills) */}
      {/* ============================================================== */}
      <section id="skills" className="mx-auto max-w-[1400px] px-6 sm:px-10 pt-20 mb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
            TECHNICAL & SOFT COMPETENCIES
          </div>
          <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
            SKILLS & CAPABILITIES
          </h2>
          <p className="font-londrina text-[20px] font-light text-white/50 max-w-xl mx-auto mt-2">
            Directly extracted from resume — categorized into core development, AI architecture, and leadership traits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(173,235,51,0.5)', boxShadow: '0 15px 35px -10px rgba(173,235,51,0.2)' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-7 rounded-[30px] bg-[#0a0a0a] border border-white/10 transition-all group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 group-hover:scale-110 transition-transform">
                  <Sparkles size={18} />
                </div>
                <h3 className="font-anton text-2xl text-white uppercase group-hover:text-lime-400 transition-colors">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-londrina text-[17px] font-light text-white/80 hover:border-lime-400 hover:text-lime-400 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. PROJECTS SECTION (#projects) */}
      {/* ============================================================== */}
      <section id="projects" className="mx-auto max-w-[1400px] px-6 sm:px-10 pt-20 mb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8"
        >
          <div>
            <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
              FEATURED PROJECTS ({PROJECTS.length})
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-1 bg-lime-400 mt-2 max-w-[340px]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {WORK_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-londrina text-[17px] transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-lime-400 text-black font-normal shadow-[0_0_20px_rgba(173,235,51,0.4)]'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, pIdx) => (
            <motion.div
              key={project.id}
              onClick={() => handleOpenModal(project.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pIdx * 0.08 }}
              whileHover={{ y: -10, borderColor: 'rgba(173,235,51,0.6)', boxShadow: '0 20px 45px -15px rgba(173,235,51,0.22)' }}
              className="rounded-[30px] overflow-hidden border border-white/10 bg-[#0a0a0a] cursor-pointer group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <span
                    className="absolute top-4 left-4 font-londrina text-[14px] px-3.5 py-1 rounded-full text-black font-normal shadow-md"
                    style={{ backgroundColor: project.accent }}
                  >
                    {project.category}
                  </span>
                  <span className="absolute top-4 right-4 font-londrina text-[13px] px-2.5 py-1 rounded-full bg-black/70 text-white/80 border border-white/20 backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="font-anton text-2xl sm:text-3xl text-white group-hover:text-lime-400 transition-colors uppercase leading-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="font-londrina text-[18px] font-light text-white/55 line-clamp-2 mb-4 leading-snug">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[13px] font-sans bg-white/5 border border-white/10 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-7 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <span className="font-londrina text-[17px] text-lime-400 flex items-center gap-1 group-hover:underline">
                  <span>View System Specs & Demo</span>
                  <ChevronRight size={16} />
                </span>
                <span className="text-white/40 text-[13px] font-mono">#{project.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. EDUCATION SECTION (#education) */}
      {/* ============================================================== */}
      <section id="education" className="mx-auto max-w-[1400px] px-6 sm:px-10 pt-20 mb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
            ACADEMIC BACKGROUND
          </div>
          <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
            HIGHER EDUCATION
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-lime-400 mt-3 max-w-[380px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: 'rgba(173,235,51,0.5)', boxShadow: '0 20px 45px -15px rgba(173,235,51,0.15)' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-[36px] bg-[#0a0a0a] border border-white/10 transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-3xl bg-lime-400/20 border border-lime-400/40 flex items-center justify-center text-lime-400 shrink-0">
                <GraduationCap size={36} />
              </div>
              <div>
                <h3 className="font-anton text-2xl sm:text-4xl text-white uppercase">
                  {PERSONAL_INFO.degree}
                </h3>
                <p className="font-londrina text-[22px] text-lime-400 mt-1">
                  {PERSONAL_INFO.college}
                </p>
                <span className="font-londrina text-[17px] text-white/50 flex items-center gap-1.5 mt-1">
                  <MapPin size={15} className="text-lime-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/30 font-londrina text-[18px]">
                {PERSONAL_INFO.batch}
              </span>
              <span className="inline-block px-4 py-1 rounded-full bg-lime-400 text-black font-londrina text-[17px] font-normal shadow-sm">
                {PERSONAL_INFO.cgpa}
              </span>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 font-londrina text-[19px]">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-lime-400 uppercase text-[15px] tracking-wider block mb-1">Domain Focus</span>
              <p className="text-white/80">Artificial Intelligence, Machine Learning, Deep Neural Networks & Computer Vision.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-lime-400 uppercase text-[15px] tracking-wider block mb-1">Software Foundations</span>
              <p className="text-white/80">Data Structures & Algorithms, Object-Oriented Programming (Java, C++, Python), Database Management.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-lime-400 uppercase text-[15px] tracking-wider block mb-1">Practical Delivery</span>
              <p className="text-white/80">Full-Stack Web Engineering, RAG Systems, Hackathons, and End-to-End Autonomous Systems.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============================================================== */}
      {/* 6. CERTIFICATIONS SECTION (#certifications) */}
      {/* ============================================================== */}
      <section id="certifications" className="mx-auto max-w-[1400px] px-6 sm:px-10 pt-20 mb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
            CREDENTIALS FROM RESUME
          </div>
          <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
            INDUSTRY CERTIFICATIONS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, cIdx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: cIdx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(173,235,51,0.6)', boxShadow: '0 15px 35px -10px rgba(173,235,51,0.2)' }}
              className="p-8 rounded-[32px] bg-[#0a0a0a] border border-white/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-londrina text-[14px] px-3 py-1 rounded-full text-black font-normal"
                    style={{ backgroundColor: cert.accent }}
                  >
                    {cert.issuer}
                  </span>
                  <span className="font-londrina text-[15px] text-white/50">{cert.year}</span>
                </div>

                <h3 className="font-anton text-2xl text-white uppercase mb-3">
                  {cert.title}
                </h3>
                <p className="font-londrina text-[18px] font-light text-white/55 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-lime-400 font-londrina text-[16px]">
                <span>Verified Credential</span>
                <CheckCircle2 size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. ACHIEVEMENTS SECTION (#achievements) */}
      {/* ============================================================== */}
      <section id="achievements" className="mx-auto max-w-[1400px] px-6 sm:px-10 pt-20 mb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
            HONORS & COMPETITIONS
          </div>
          <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
            MILESTONES & ACHIEVEMENTS
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-lime-400 mt-3 max-w-[420px]"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, aIdx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: aIdx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(173,235,51,0.6)', boxShadow: '0 15px 35px -10px rgba(173,235,51,0.2)' }}
              className="p-8 rounded-[32px] bg-[#0a0a0a] border border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 mb-5 group-hover:scale-110 transition-transform">
                <Trophy size={24} />
              </div>
              <span className="font-londrina text-[14px] text-lime-400 uppercase tracking-widest block mb-1">
                {ach.category}
              </span>
              <h3 className="font-anton text-2xl text-white uppercase mb-4 group-hover:text-lime-400 transition-colors">
                {ach.title}
              </h3>
              <ul className="space-y-2.5 font-londrina text-[18px] font-light text-white/60">
                {ach.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-lime-400 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. WHY HIRE ME SECTION (#why-hire-me) */}
      {/* ============================================================== */}
      <section id="why-hire-me" className="mx-auto max-w-[1400px] px-6 sm:px-10 pt-20 mb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
            VALUE PROPOSITION
          </div>
          <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
            WHY HIRE SAKTHIVEL
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_HIRE_ME.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.03, borderColor: 'rgba(173,235,51,0.6)', boxShadow: '0 15px 35px -10px rgba(173,235,51,0.2)' }}
              className="p-8 rounded-[30px] bg-[#0a0a0a] border border-white/10 text-center transition-all group cursor-default"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {item.emoji}
              </div>
              <h3 className="font-anton text-2xl text-white uppercase mb-2 group-hover:text-lime-400 transition-colors">
                {item.title}
              </h3>
              <p className="font-londrina text-[18px] font-light text-white/55 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. CONTACT SECTION (#contact) */}
      {/* ============================================================== */}
      <section id="contact" className="mx-auto max-w-[1400px] px-6 sm:px-10 pt-20 mb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
            GET IN TOUCH
          </div>
          <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
            CONTACT SAKTHIVEL
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-lime-400 mt-3 max-w-[380px]"
          />
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          {/* Direct channels */}
          <div className="p-8 sm:p-10 rounded-[36px] bg-[#0a0a0a] border border-white/10 space-y-4">
            <h3 className="font-anton text-3xl text-white uppercase mb-2">
              Reach Out Directly
            </h3>
            <p className="font-londrina text-[20px] font-light text-white/50 mb-6">
              Available for internships, collaborative software projects, and AI development roles.
            </p>

            <motion.a
              whileHover={{ x: 6 }}
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-400/50 hover:bg-white/[0.06] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div>
                <span className="font-londrina text-[14px] text-white/40 uppercase tracking-widest block">
                  Email
                </span>
                <span className="font-londrina text-[20px] text-white group-hover:text-lime-400 transition-colors">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ x: 6 }}
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-400/50 hover:bg-white/[0.06] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div>
                <span className="font-londrina text-[14px] text-white/40 uppercase tracking-widest block">
                  Phone / Mobile
                </span>
                <span className="font-londrina text-[20px] text-white group-hover:text-lime-400 transition-colors">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ x: 6 }}
              href="https://wa.me/919342212825?text=Hi%20Sakthivel%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect%20with%20you!"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-400/50 hover:bg-white/[0.06] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-110 transition-transform">
                <MessageSquare size={20} />
              </div>
              <div>
                <span className="font-londrina text-[14px] text-white/40 uppercase tracking-widest block">
                  WhatsApp Quick Chat
                </span>
                <span className="font-londrina text-[20px] text-white group-hover:text-[#25D366] transition-colors">
                  Chat on WhatsApp (+91 93422 12825)
                </span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ x: 6 }}
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-400/50 hover:bg-white/[0.06] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 shrink-0 group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <div>
                <span className="font-londrina text-[14px] text-white/40 uppercase tracking-widest block">
                  LinkedIn
                </span>
                <span className="font-londrina text-[20px] text-white group-hover:text-lime-400 transition-colors">
                  linkedin.com/in/r-sakthivelaiml
                </span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ x: 6 }}
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-400/50 hover:bg-white/[0.06] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 shrink-0 group-hover:scale-110 transition-transform">
                <Github size={20} />
              </div>
              <div>
                <span className="font-londrina text-[14px] text-white/40 uppercase tracking-widest block">
                  GitHub
                </span>
                <span className="font-londrina text-[20px] text-white group-hover:text-lime-400 transition-colors">
                  github.com/sakthivel222
                </span>
              </div>
            </motion.a>
          </div>

          {/* Interactive Form */}
          <div className="p-8 sm:p-10 rounded-[36px] bg-[#0a0a0a] border border-lime-400/30 shadow-[0_0_50px_rgba(173,235,51,0.06)]">
            <h3 className="font-anton text-3xl text-white uppercase mb-2">
              Send Direct Message
            </h3>
            <p className="font-londrina text-[19px] font-light text-white/50 mb-8">
              Fill in your details below and your note will be delivered straight to my email inbox.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-8 rounded-3xl bg-lime-400/10 border border-lime-400/40 text-center"
                >
                  <CheckCircle2 size={48} className="text-lime-400 mx-auto mb-4" />
                  <h4 className="font-anton text-3xl text-white uppercase mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="font-londrina text-[20px] font-light text-white/70 max-w-md mx-auto mb-6">
                    Your note has been delivered directly to <span className="text-lime-400 font-normal">sakthivel.aiml@gmail.com</span>. I'll get back to you promptly.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-full bg-lime-400 text-black px-8 py-3 font-londrina text-[19px] font-normal cursor-pointer"
                  >
                    Send Another Note
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-londrina text-[15px] uppercase tracking-wider text-white/60 mb-2 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-white/[0.04] border border-white/15 rounded-2xl px-5 py-3.5 font-londrina text-[19px] font-light text-white placeholder:text-white/20 focus:outline-none focus:border-lime-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-londrina text-[15px] uppercase tracking-wider text-white/60 mb-2 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-white/[0.04] border border-white/15 rounded-2xl px-5 py-3.5 font-londrina text-[19px] font-light text-white placeholder:text-white/20 focus:outline-none focus:border-lime-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-londrina text-[15px] uppercase tracking-wider text-white/60 mb-2 block">
                      Subject / Role
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="AI Internship, Project Collaboration..."
                      className="w-full bg-white/[0.04] border border-white/15 rounded-2xl px-5 py-3.5 font-londrina text-[19px] font-light text-white placeholder:text-white/20 focus:outline-none focus:border-lime-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-londrina text-[15px] uppercase tracking-wider text-white/60 mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about the role or project..."
                      className="w-full bg-white/[0.04] border border-white/15 rounded-2xl px-5 py-3.5 font-londrina text-[19px] font-light text-white placeholder:text-white/20 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 text-black py-4 font-londrina text-[22px] font-normal hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer shadow-lg"
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending Note...' : 'Send Message Now'}</span>
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

