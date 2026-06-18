import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Methodology() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const overviewSteps = [
    { num: "01", name: "Assess", detail: "Visibility & risk exposure mapping." },
    { num: "02", name: "Protect", detail: "Multi-layer perimeter hardening." },
    { num: "03", name: "Detect", detail: "Continuous live threat monitoring." },
    { num: "04", name: "Respond", detail: "Structured containment & mitigation." },
    { num: "05", name: "Recover", detail: "System normalization & continuity." },
    { num: "06", name: "Improve", detail: "Long-term cyber security maturity." }
  ];

  return (
    <section className="py-24 px-6 lg:px-16 xl:px-24 bg-[#F7F2EB] text-[#081F5C] font-sans relative overflow-hidden border-t border-[#081F5C]/5">
      
      {/* Structural Atmospheric Backdrop Element */}
      <div className="absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-[#D0E3FF]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Column: Contextual Core & Navigation Trigger */}
        <div className="lg:col-span-5 flex flex-col justify-between min-h-95">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-[#334EAC]"></span>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#334EAC]">OUR METHODOLOGY</p>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#081F5C] leading-none mb-6">
              Our Security <br />Methodology
            </h2>
            
            <p className="text-base font-medium text-[#081F5C]/80 leading-relaxed max-w-md mb-8">
              We follow a structured framework built around continuous intelligence and tactical lifecycle stages designed to identify vulnerabilities, strengthen defences, and maintain long-term cyber resilience.
            </p>
          </motion.div>

          {/* Action Trigger Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-4"
          >
            <Link 
              to="/securitymethodology" 
              className="inline-flex items-center gap-6 group cursor-pointer bg-[#081F5C] text-white py-4 px-8 rounded-xl font-bold text-sm tracking-wide shadow-xl shadow-[#081F5C]/10 transition-all duration-300 hover:bg-[#334EAC] hover:shadow-2xl"
            >
              Analyze Framework Strategy
              <motion.span 
                className="font-mono text-base font-black text-[#BAD6EB] group-hover:translate-x-1.5 transition-transform duration-200"
              >
                &rarr;
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Interactive Blueprint Index Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          {overviewSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#081F5C]/5 p-6 rounded-xl min-h-25 flex flex-col justify-between shadow-sm cursor-pointer relative group overflow-hidden"
            >
              
              <div>
                <h3 className="text-base font-black tracking-tight text-[#081F5C] mb-1">
                  {step.name}
                </h3>
                <p className="text-[12px] font-medium text-[#081F5C]/60 leading-tight">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}