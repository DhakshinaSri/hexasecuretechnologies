import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#081F5C] font-sans overflow-x-hidden selection:bg-[#BAD6EB]">
      
      {/* SECTION 1: IDENTITY & MISSION LAYER */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-20 pb-20 overflow-hidden">
        
        {/* Soft atmospheric background mesh */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-[#BAD6EB]/30 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
          
          {/* Sticky/Asymmetric Left Context Column */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-8 bg-[#334EAC]"></span>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#334EAC]">
                ABOUT
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#081F5C] leading-none mb-4">
              HEXA SECURE TECHNOLOGIES
            </h1>
            
            <p className="text-xs tracking-[0.4em] font-bold text-[#7096D1] uppercase mb-8 pl-1">
              Your Trusted Partner in Cyber Security Excellence
            </p>

            {/* Abstract Decorative Interlocking Geometric Accent */}
            <div className="relative w-32 h-32 mt-12 hidden lg:block">
              <div className="absolute inset-0 border-2 border-[#334EAC]/20 rounded-2xl transform rotate-12" />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border border-dashed border-[#7096D1]/40 rounded-2xl"
              />
              <div className="absolute inset-4 bg-[#F7F2EB] rounded-2xl flex items-center justify-center text-sm font-bold font-mono text-[#334EAC]">
                Secure
              </div>
            </div>
          </motion.div>

          {/* Deep Content Chronology Column */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 space-y-12 lg:pl-12 border-t lg:border-t-0 lg:border-l border-[#081F5C]/10 pt-12 lg:pt-0"
          >
            {/* Core Premise Block */}
            <motion.div variants={fadeInUp} className="relative pl-0 md:pl-8">
              <span className="hidden md:block absolute left-0 top-3 w-2 h-2 rounded-full bg-[#334EAC]" />
              <p className="text-xl md:text-2xl font-bold tracking-tight text-[#081F5C] leading-relaxed">
                Hexa Secure Technologies is a next-generation cyber security company committed to helping organizations identify, prevent, detect, and respond to evolving cyber risks.
              </p>
            </motion.div>

            {/* Mission Statement Callout Box */}
            <motion.div 
              variants={fadeInUp}
              className="bg-[#F7F2EB] p-8 rounded-3xl border border-[#334EAC]/5 relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 text-9xl font-black text-[#081F5C]/5 select-none pointer-events-none font-mono">
                M
              </div>
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[#334EAC] mb-3">Our Mission</h2>
              <p className="text-lg text-[#081F5C]/90 font-medium leading-relaxed">
                Our mission is simple — to help organizations stay protected in an increasingly complex digital landscape through proactive security measures, intelligent monitoring, and practical risk management strategies.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: CAPABILITY & ECOSYSTEM MATRIX */}
      <section className="bg-[#F7F2EB] py-24 px-6 lg:px-16 xl:px-24 relative overflow-hidden">
        
        {/* Subtle geometric line overlay for architectural effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#081f5c05_1px,transparent_1px),linear-gradient(to_bottom,#081f5c05_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
            <div className="lg:col-span-6">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#081F5C]">
                Globally Recognized Cyber Security Practices
              </h3>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm md:text-base font-medium text-[#081F5C]/80 leading-relaxed">
                With expertise backed by globally recognized cyber security practices and professionals with certifications such as CEH, CISSP, and ISO frameworks, we provide organizations with tailored cyber defence strategies aligned to their operational needs and regulatory requirements.
              </p>
            </div>
          </div>

          {/* Interactive Sectors Grid Layout */}
          <div className="mt-16">            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Startups", 
                "SMEs", 
                "Enterprises", 
                "Educational Institutions", 
                "Healthcare Organizations", 
                "Government Bodies", 
                "BFSI", 
                "IT Companies"
              ].map((sector, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: "#081F5C", 
                    color: "#FFF9F0",
                    borderColor: "#081F5C"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="bg-white border border-[#081F5C]/10 py-5 px-6 rounded-xl flex items-center justify-between shadow-sm cursor-pointer min-h-18"
                >
                  <p className="text-base font-bold tracking-tight transition-colors duration-200 pr-4">
                    {sector}
                  </p>
                  <span className="text-[11px] font-mono text-[#7096D1] tracking-widest block font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Structural Closing Layer Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white border border-[#BAD6EB] p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl shadow-[#081F5C]/5"
          >
            <div className="flex gap-4 items-center">
              <div className="w-3 h-3 rounded-full bg-[#334EAC] animate-pulse" />
              <p className="text-lg font-bold tracking-tight text-[#081F5C]">
                Operating with a security-first approach built on trust, innovation, and measurable outcomes.
              </p>
            </div>
            <div className="text-xs font-mono uppercase bg-[#FFF9F0] px-4 py-2 rounded-lg text-[#334EAC] font-bold border border-[#BAD6EB]/60 tracking-wider whitespace-nowrap">
              Ecosystem Verified
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}