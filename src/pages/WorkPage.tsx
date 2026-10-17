import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Eye, Sparkles, Layers } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectModal } from '../components/ProjectModal';
import { CTASection } from '../components/CTASection';
import { PROJECTS, WORK_CATEGORIES, Project } from '../data/portfolioData';

export const WorkPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  const [activeModalId, setActiveModalId] = useState<number | null>(null);

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const featuredProjects = PROJECTS.filter((p) => p.featured);
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

  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={handleCloseModal}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < projectIds.length - 1}
      />

      <div className="pt-28 pb-10">
        {/* Back to Home Pill Button matching manx-13 */}
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

        {/* Page Hero Header */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -1 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-block bg-lime-400 px-4 py-1 mb-4 select-none"
          >
            <span className="font-league text-[24px] tracking-[3px] text-black font-normal uppercase">
              SELECTED PROJECTS & AI SYSTEMS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-league font-normal leading-none tracking-[4px] text-white text-[72px] sm:text-[110px] md:text-[150px] lg:text-[180px] uppercase select-none"
          >
            MY WORK
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-lime-400 mt-3 w-full max-w-[600px]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 font-londrina text-[19px] font-light text-white/45 flex items-center gap-2 select-none"
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
            <span>Click any project to view full technical breakdown, live links & source code</span>
          </motion.p>
        </section>

        {/* Featured Projects Section */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <h2 className="font-londrina text-[24px] font-normal text-lime-400 uppercase tracking-widest mb-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-lime-400" />
            <span>Featured Highlights</span>
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => {
              const isHovered = hoveredProjectId === project.id;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setHoveredProjectId(project.id)}
                  onHoverEnd={() => setHoveredProjectId(null)}
                  onClick={() => handleOpenModal(project.id)}
                  className="group relative overflow-hidden rounded-[32px] cursor-pointer select-none bg-[#0a0a0a]"
                  style={{ border: `1px solid ${project.accent}35` }}
                >
                  {/* Image Container with Hover Zoom */}
                  <div className="relative overflow-hidden h-[300px] sm:h-[360px]">
                    <motion.img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                      animate={{ scale: isHovered ? 1.07 : 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                    {/* Year badge */}
                    <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/60 backdrop-blur px-3.5 py-1 font-londrina text-[15px] font-light text-white/70">
                      {project.year}
                    </div>

                    {/* Circular Accent Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-4 left-4 w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: project.accent }}
                    >
                      <Eye size={20} className="text-black" />
                    </motion.div>

                    {/* Center Action Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]"
                    >
                      <span
                        className="font-londrina text-[22px] font-normal tracking-widest px-7 py-3 rounded-full bg-black/80 backdrop-blur border border-white/10 shadow-2xl"
                        style={{ color: project.accent }}
                      >
                        VIEW PROJECT →
                      </span>
                    </motion.div>
                  </div>

                  {/* Project Info Card */}
                  <div
                    className="p-6 sm:p-8 bg-white/[0.02] border-t"
                    style={{ borderColor: `${project.accent}20` }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3
                          className="font-anton font-normal text-[34px] sm:text-[44px] leading-none transition-colors duration-300 uppercase"
                          style={{ color: isHovered ? project.accent : '#ffffff' }}
                        >
                          {project.title}
                        </h3>
                        <p className="font-londrina text-[19px] font-light text-white/50 mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={24}
                        className="text-white/30 group-hover:text-lime-400 transition-colors mt-1 shrink-0"
                      />
                    </div>

                    <p className="font-londrina text-[18px] font-light leading-relaxed text-white/60 mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-londrina rounded-full px-3.5 py-1 text-[15px] font-light border"
                          style={{
                            borderColor: `${project.accent}40`,
                            color: project.accent,
                            backgroundColor: `${project.accent}10`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Specialized Domain Highlight Banner matching manx-13 style */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[32px] border border-lime-400/30 bg-[#0a0a0a] p-8 sm:p-12 shadow-[0_0_50px_rgba(173,235,51,0.08)]"
          >
            <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-lime-400/5 blur-[90px] pointer-events-none rounded-full" />
            <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-center relative z-10">
              <div>
                <span className="font-londrina text-lime-400 text-[15px] font-normal uppercase tracking-[4px] mb-2 block">
                  Engineering Focus
                </span>
                <h3 className="font-league text-[38px] sm:text-[56px] font-normal text-white leading-none mb-3 uppercase tracking-wide">
                  5 REAL-WORLD AI & FULL-STACK APPS THAT{' '}
                  <span className="text-lime-400">DELIVER IMPACT</span>
                </h3>
                <p className="font-londrina text-[19px] font-light text-white/55 max-w-[620px] leading-relaxed">
                  From LangChain RAG pipelines and ATS resume neural parsers to full-stack e-commerce systems — built with scalable architectures and clean code.
                </p>
              </div>

              <Link href="/services">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-lime-400 text-black px-8 py-4 font-londrina text-[21px] font-normal cursor-pointer whitespace-nowrap shadow-xl"
                >
                  <Layers size={20} />
                  <span>View Technical Stack →</span>
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Category Filter Tabs */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-10">
          <div className="flex flex-wrap gap-3">
            {WORK_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className={`rounded-full px-6 py-2.5 font-londrina text-[20px] tracking-wide border transition-all duration-200 ${
                    isSelected
                      ? 'bg-lime-400 border-lime-400 text-black font-normal shadow-[0_0_20px_rgba(173,235,51,0.3)]'
                      : 'border-white/20 text-white/60 hover:border-lime-400/50 hover:text-white'
                  }`}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* All Projects Responsive Grid with Framer Motion layout */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                const isHovered = hoveredProjectId === project.id;
                return (
                  <motion.article
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    onHoverStart={() => setHoveredProjectId(project.id)}
                    onHoverEnd={() => setHoveredProjectId(null)}
                    onClick={() => handleOpenModal(project.id)}
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 cursor-pointer hover:border-white/25 transition-colors duration-300 bg-white/[0.02] select-none shadow-lg"
                  >
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden h-[220px] sm:h-[240px]">
                      <motion.img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                        animate={{ scale: isHovered ? 1.08 : 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                      {/* Hover action overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ backgroundColor: `${project.accent}18` }}
                      >
                        <motion.div
                          initial={{ scale: 0.5 }}
                          animate={{ scale: isHovered ? 1 : 0.5 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col items-center gap-2"
                        >
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                            style={{ backgroundColor: project.accent }}
                          >
                            <Eye size={20} className="text-black" />
                          </div>
                          <span
                            className="font-londrina text-[16px] font-normal tracking-widest"
                            style={{ color: project.accent }}
                          >
                            EXPLORE
                          </span>
                        </motion.div>
                      </motion.div>

                      {/* Category Pill Tag */}
                      <span
                        className="absolute top-3 left-3 rounded-full px-3.5 py-1 font-londrina text-[14px] font-light text-black shadow"
                        style={{ backgroundColor: project.accent }}
                      >
                        {project.category}
                      </span>

                      {/* Year badge */}
                      <span className="absolute top-3 right-3 rounded-full bg-black/60 border border-white/20 backdrop-blur px-3 py-0.5 font-londrina text-[13px] font-light text-white/70">
                        {project.year}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3
                        className="font-anton font-normal leading-none text-[30px] sm:text-[34px] transition-colors duration-300 uppercase"
                        style={{ color: isHovered ? project.accent : '#ffffff' }}
                      >
                        {project.title}
                      </h3>
                      <p className="font-londrina text-[17px] font-light text-white/40 mt-1.5 mb-3">
                        {project.subtitle}
                      </p>
                      <p className="font-londrina text-[17px] font-light leading-relaxed text-white/50 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between font-londrina text-[15px] font-light">
                        <span className="text-white/40">{project.tags.slice(0, 3).join(' • ')}</span>
                        <span style={{ color: project.accent }} className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Details →
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Call to Action Banner matching manx-13 */}
        <CTASection
          title="WANT TO BUILD TOGETHER?"
          subtitle="Looking for an AI/ML or Software Development intern? Let's connect and build."
          buttonText="Reach Out to Sakthivel →"
        />

        {/* Return to Home Pill Button */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mt-8 flex justify-center">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.04, x: -4 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 cursor-pointer rounded-full border border-white/20 px-8 py-4 hover:border-lime-400 hover:bg-lime-400/5 transition-all duration-200 group"
            >
              <ArrowLeft size={18} className="text-white/50 group-hover:text-lime-400 transition-colors" />
              <span className="font-londrina text-[20px] font-light text-white/60 group-hover:text-lime-400 transition-colors">
                Return to Home
              </span>
            </motion.span>
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
};
