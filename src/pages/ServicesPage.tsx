import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowRight, Sparkles, Terminal, Code2, Server } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTASection } from '../components/CTASection';
import { SERVICES } from '../data/portfolioData';

export const ServicesPage: React.FC = () => {
  const PROCESS_STEPS = [
    {
      num: "01",
      title: "Discover & Scope",
      desc: "Analyze the specific problem, dataset, and requirements. Define clear success metrics and determine whether Generative AI, traditional ML, or a full-stack system is the right fit."
    },
    {
      num: "02",
      title: "Architect & Prototype",
      desc: "Design the schema, vector embedding pipeline, API contracts, and user flow. Build rapid interactive prototypes to validate core assumptions early."
    },
    {
      num: "03",
      title: "Build & Engineer",
      desc: "Develop production-ready clean code. Implement robust prompt engineering, retrieval reranking, reactive UI state, and resilient backend services."
    },
    {
      num: "04",
      title: "Evaluate & Deploy",
      desc: "Benchmark accuracy, token latency, and system throughput. Containerize using Docker and deploy to cloud platforms with continuous logging."
    }
  ];

  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Navbar />

      <div className="pt-28 pb-10">
        {/* Back to Home Button */}
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
              CAPABILITIES & EXPERTISE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-league font-normal leading-none tracking-[4px] text-white text-[72px] sm:text-[110px] md:text-[150px] lg:text-[180px] uppercase select-none"
          >
            WHAT I BUILD
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-lime-400 mt-3 w-full max-w-[600px]"
          />
        </section>

        {/* Services Cards */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((serv, index) => (
              <motion.div
                key={serv.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 sm:p-12 rounded-[36px] bg-[#0a0a0a] border border-white/10 hover:border-lime-400/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="font-anton text-4xl sm:text-5xl font-normal"
                      style={{ color: serv.accent }}
                    >
                      {serv.number}
                    </span>
                    <span
                      className="font-londrina text-[16px] px-4 py-1 rounded-full border"
                      style={{ borderColor: `${serv.accent}40`, color: serv.accent }}
                    >
                      Specialization
                    </span>
                  </div>

                  <h3 className="font-anton text-3xl sm:text-4xl text-white uppercase mb-3">
                    {serv.title}
                  </h3>

                  <p
                    className="font-londrina text-[20px] font-normal mb-4"
                    style={{ color: serv.accent }}
                  >
                    {serv.tagline}
                  </p>

                  <p className="font-londrina text-[19px] font-light text-white/60 leading-relaxed mb-8">
                    {serv.description}
                  </p>

                  <div className="border-t border-white/10 pt-6">
                    <h4 className="font-londrina text-lg uppercase tracking-wider text-white/40 mb-4">
                      Core Deliverables:
                    </h4>
                    <ul className="space-y-3 font-londrina text-[18px] font-light text-white/80">
                      {serv.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={18} className="mt-1 shrink-0 text-lime-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link href="/work">
                    <span className="font-londrina text-[19px] flex items-center gap-2 text-white/70 group-hover:text-lime-400 transition-colors cursor-pointer">
                      <span>View Relevant Projects</span>
                      <ArrowRight size={18} />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Engineering Workflow / Process Section */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <div className="text-center mb-16">
            <div className="inline-block bg-lime-400 px-3.5 py-0.5 mb-3 font-league text-[20px] text-black uppercase tracking-wider">
              HOW I WORK
            </div>
            <h2 className="font-league text-[48px] sm:text-[72px] font-normal leading-none uppercase">
              THE DEVELOPMENT PROCESS
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-[30px] bg-[#0a0a0a] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-anton text-4xl text-lime-400 block mb-4">
                    {step.num}
                  </span>
                  <h3 className="font-anton text-2xl text-white uppercase mb-3">
                    {step.title}
                  </h3>
                  <p className="font-londrina text-[18px] font-light text-white/50 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="HAVE A PROJECT OR ROLE IN MIND?"
          subtitle="Let's build intelligent, performant software together."
          buttonText="Start A Conversation →"
        />
      </div>

      <Footer />
    </main>
  );
};
