import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback directly to mail client
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
              LET'S TALK
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-league font-normal leading-none tracking-[4px] text-white text-[72px] sm:text-[110px] md:text-[150px] lg:text-[180px] uppercase select-none"
          >
            CONTACT ME
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-lime-400 mt-3 w-full max-w-[600px]"
          />
        </section>

        {/* Contact Content Split */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            {/* Contact Info Channels */}
            <motion.div
              id="channels"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-[36px] bg-[#0a0a0a] border border-white/10"
            >
              <h2 className="font-anton text-3xl sm:text-4xl text-white uppercase mb-4">
                Reach Out Directly
              </h2>
              <p className="font-londrina text-[20px] font-light text-white/50 mb-8 leading-relaxed">
                Have an AI/ML internship, project inquiry, or collaboration idea? I'm active and typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-400/50 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="font-londrina text-[14px] text-white/40 uppercase tracking-widest block">
                      Email Address
                    </span>
                    <span className="font-londrina text-[20px] text-white group-hover:text-lime-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-400/50 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 shrink-0">
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
                </a>

                <a
                  href="https://wa.me/919342212825?text=Hi%20Sakthivel%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect%20with%20you!"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-400/50 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
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
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-400/50 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 shrink-0">
                    <Github size={20} />
                  </div>
                  <div>
                    <span className="font-londrina text-[14px] text-white/40 uppercase tracking-widest block">
                      GitHub Profile
                    </span>
                    <span className="font-londrina text-[20px] text-white group-hover:text-lime-400 transition-colors">
                      github.com/sakthivel
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-400/50 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 shrink-0">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <span className="font-londrina text-[14px] text-white/40 uppercase tracking-widest block">
                      LinkedIn Network
                    </span>
                    <span className="font-londrina text-[20px] text-white group-hover:text-lime-400 transition-colors">
                      linkedin.com/in/sakthivel
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="font-londrina text-[14px] text-white/40 uppercase tracking-widest block">
                      Location
                    </span>
                    <span className="font-londrina text-[20px] text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 font-londrina text-[16px] font-light text-lime-400">
                <Clock size={16} />
                <span>Quick Turnaround • Open to Remote & In-Person Roles</span>
              </div>
            </motion.div>

            {/* Interactive Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-8 sm:p-10 rounded-[36px] bg-[#0a0a0a] border border-lime-400/30 shadow-[0_0_50px_rgba(173,235,51,0.06)]"
            >
              <h2 className="font-anton text-3xl sm:text-4xl text-white uppercase mb-2">
                Send A Message
              </h2>
              <p className="font-londrina text-[19px] font-light text-white/50 mb-8">
                Fill in your project or role details below and I'll get back to you promptly.
              </p>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-8 rounded-3xl bg-lime-400/10 border border-lime-400/40 text-center"
                  >
                    <CheckCircle2 size={48} className="text-lime-400 mx-auto mb-4" />
                    <h3 className="font-anton text-3xl text-white uppercase mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="font-londrina text-[20px] font-light text-white/70 max-w-md mx-auto mb-6">
                      Your note has been delivered directly to <span className="text-lime-400 font-normal">sakthivel.aiml@gmail.com</span>. I'll review your inquiry and respond shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="rounded-full bg-lime-400 text-black px-8 py-3 font-londrina text-[19px] font-normal"
                    >
                      Send Another Note
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-londrina text-[15px] uppercase tracking-wider text-white/60 mb-2 block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
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
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@domain.com"
                          className="w-full bg-white/[0.04] border border-white/15 rounded-2xl px-5 py-3.5 font-londrina text-[19px] font-light text-white placeholder:text-white/20 focus:outline-none focus:border-lime-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-londrina text-[15px] uppercase tracking-wider text-white/60 mb-2 block">
                        Subject / Opportunity
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="AI Internship, Full-Stack Project Collab..."
                        className="w-full bg-white/[0.04] border border-white/15 rounded-2xl px-5 py-3.5 font-londrina text-[19px] font-light text-white placeholder:text-white/20 focus:outline-none focus:border-lime-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-londrina text-[15px] uppercase tracking-wider text-white/60 mb-2 block">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me a bit about the role or what you want to build..."
                        className="w-full bg-white/[0.04] border border-white/15 rounded-2xl px-5 py-3.5 font-londrina text-[19px] font-light text-white placeholder:text-white/20 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 text-black py-4 font-londrina text-[22px] font-normal hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer shadow-lg"
                    >
                      <Send size={18} />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message Now'}</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};
