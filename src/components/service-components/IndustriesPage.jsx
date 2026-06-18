import React from 'react';
import { motion } from 'framer-motion';

export default function IndustriesAndMethodologyPage() {

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-white text-[#081F5C] font-sans selection:bg-[#BAD6EB]">
      
      {/* SECTION 1: INDUSTRIES WE SERVE (Compact Row Grid) */}
      <section className="relative pt-24 pb-20 px-6 lg:px-16 xl:px-24 bg-white overflow-hidden">
        <div className="absolute top-[-10%] right-[-15%] w-[45vw] h-[45vw] bg-[#D0E3FF]/30 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-[#334EAC]"></span>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#334EAC]">INDUSTRIES WE SERVE</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#081F5C] leading-none">
              Cyber Security Solutions Tailored for Diverse Industries
            </h1>
            <p className="text-xs tracking-[0.4em] font-bold text-[#7096D1] uppercase mt-6 pl-1">
              We provide customized cyber security solutions for:
            </p>
          </motion.div>

          {/* Optimized Low-Height Industry Sector Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Startups",
              "Small & Medium Enterprises (SMEs)",
              "Large Enterprises",
              "Educational Institutions & Colleges",
              "Government Organizations",
              "Hospitals & Healthcare Providers",
              "BFSI Sector",
              "IT & ITES Companies",
              "Manufacturing & Industrial Businesses"
            ].map((industry, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.02, 
                  backgroundColor: "#081F5C", 
                  color: "#FFF9F0",
                  borderColor: "#081F5C"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="bg-[#F7F2EB] border border-[#081F5C]/5 py-5 px-6 rounded-xl flex items-center justify-between shadow-sm cursor-pointer min-h-18"
              >
                <p className="text-base font-black tracking-tight pr-4 transition-colors duration-200">
                  {industry}
                </p>
                <span className="text-[10px] font-mono text-[#7096D1] font-bold tracking-widest block whitespace-nowrap">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}