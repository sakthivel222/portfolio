import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink, Calendar, User, Briefcase, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[940px] max-h-[92vh] overflow-y-auto bg-[#0d0d0d] rounded-[32px] border shadow-2xl"
          style={{ borderColor: `${project.accent}40` }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-200"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Media Header with Gallery */}
          <div className="relative overflow-hidden rounded-t-[32px] bg-black/60 h-[280px] sm:h-[400px]">
            <img
              src={project.gallery[activeImageIndex] || project.img}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/30 pointer-events-none" />

            {/* Badges */}
            <div className="absolute top-5 left-5 flex items-center gap-2">
              <span className="font-londrina text-[15px] font-light bg-black/70 backdrop-blur border border-white/20 text-white/80 px-3.5 py-1 rounded-full">
                {project.year}
              </span>
              <span
                className="font-londrina text-[15px] font-normal text-black px-3.5 py-1 rounded-full"
                style={{ backgroundColor: project.accent }}
              >
                {project.category}
              </span>
            </div>

            {/* Gallery Dots Navigation */}
            {project.gallery.length > 1 && (
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur px-4 py-2 rounded-full border border-white/10">
                {project.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === activeImageIndex ? 'w-8 bg-lime-400' : 'w-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Show slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="px-6 sm:px-10 py-8">
            <h2
              className="font-anton font-normal text-[44px] sm:text-[62px] leading-tight mb-2 uppercase tracking-wide"
              style={{ color: project.accent }}
            >
              {project.title}
            </h2>
            <p className="font-londrina text-[22px] font-light text-white/50 mb-6">
              {project.subtitle}
            </p>

            {/* Project Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/10 mb-8 font-londrina">
              <div>
                <p className="text-[13px] text-white/30 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                  <User size={13} />
                  <span>Client / Context</span>
                </p>
                <p className="text-[18px] text-white/80">{project.client}</p>
              </div>
              <div>
                <p className="text-[13px] text-white/30 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                  <Briefcase size={13} />
                  <span>Role</span>
                </p>
                <p className="text-[18px] text-white/80">{project.role}</p>
              </div>
              <div>
                <p className="text-[13px] text-white/30 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                  <Calendar size={13} />
                  <span>Timeline</span>
                </p>
                <p className="text-[18px] text-white/80">{project.year}</p>
              </div>
              <div>
                <p className="text-[13px] text-white/30 uppercase tracking-widest mb-1">
                  Domain
                </p>
                <p className="text-[18px]" style={{ color: project.accent }}>
                  {project.category}
                </p>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mb-8 font-londrina">
              <h3 className="text-xl font-normal text-white uppercase tracking-wider mb-3">
                Project Overview
              </h3>
              <p className="text-[19px] font-light leading-relaxed text-white/70">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {/* Core Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-8 font-londrina">
                <h3 className="text-xl font-normal text-white uppercase tracking-wider mb-4">
                  Key Technical Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5"
                    >
                      <CheckCircle2 size={18} className="text-lime-400 mt-0.5 shrink-0" />
                      <span className="text-[17px] font-light text-white/80 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="mb-8 font-londrina">
              <h3 className="text-xl font-normal text-white uppercase tracking-wider mb-3">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-londrina text-[16px] font-light px-4 py-1.5 rounded-full border bg-black/40"
                    style={{
                      borderColor: `${project.accent}40`,
                      color: project.accent,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons & Prev/Next Navigation */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-londrina">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[19px] font-normal transition-all duration-200"
                    style={{
                      backgroundColor: project.accent,
                      color: '#000000',
                    }}
                  >
                    <span>View Project</span>
                    <ExternalLink size={18} />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 text-[19px] font-light text-white transition-all duration-200"
                  >
                    <Github size={18} />
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onPrev}
                  disabled={!hasPrev}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-lime-400 hover:text-lime-400 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={onNext}
                  disabled={!hasNext}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-lime-400 hover:text-lime-400 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
