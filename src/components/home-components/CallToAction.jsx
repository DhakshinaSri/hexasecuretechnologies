import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CallToAction() {
  // Color Palette Constants for reference:
  // Planetary: #334EAC, Universe: #7096D1, Milky Way: #FFF9F0, Venus: #BAD6EB, Meteor: #F7F2EB, Galaxy: #081F5C, Sky: #D0E3FF

  return (
    <section className="py-24 px-6 lg:px-16 xl:px-24 bg-[#081F5C] text-white font-sans relative overflow-hidden border-t border-white/10">
      
      {/* Immersive 3D Vector Ambient Blur Filters */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#334EAC]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] bg-[#BAD6EB]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Architectural Identity Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#BAD6EB] text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7096D1] animate-pulse" />
          Secure Perimeter Portal
        </motion.div>

        {/* Core Tactical Content Copy */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-[#FFF9F0] leading-tight max-w-4xl mb-6"
        >
          Let’s Build a More Secure <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#BAD6EB] to-[#7096D1]">
            Digital Future Together
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg font-medium text-[#BAD6EB]/70 max-w-2xl mb-12 leading-relaxed"
        >
          Ready to strengthen your cyber security posture? Connect with Hexa Secure Technologies 
          to analyze metrics or address structural vulnerabilities immediately.
        </motion.p>

        {/* Dual-Action Operational Button Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Action: Contact Hub */}
          <Link
            to="/contact"
            className="w-full sm:w-auto text-center inline-block bg-white text-[#081F5C] font-extrabold text-sm tracking-wide py-4 px-8 rounded-xl shadow-xl transition-all duration-300 hover:bg-[#F7F2EB] hover:scale-[1.02] active:scale-[0.98]"
          >
            Initiate Engagement
          </Link>

          {/* Secondary Action: Knowledge FAQ Node */}
          <Link
            to="/faq"
            className="w-full sm:w-auto text-center inline-block bg-white/5 text-white border border-white/20 font-bold text-sm tracking-wide py-4 px-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-[0.98]"
          >
            Knowledge Base FAQs
          </Link>
        </motion.div>

      </div>
    </section>
  );
}