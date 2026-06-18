import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {

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
      
      {/* SECTION 1: HERO LAYER (An Asymmetric, Motion-Driven Conceptual Intro) */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-12 pb-24 overflow-hidden">
        
        {/* Subtle, abstract 3D/Floating depth layers in background */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#D0E3FF] rounded-full blur-[120px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Main Typography Column */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-[#334EAC]"></span>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#334EAC]">
                HEXA SECURE TECHNOLOGIES
              </p>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#081F5C] leading-none mb-4">
              Securing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#334EAC] to-[#7096D1]">
                Digital Trust
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xs tracking-[0.5em] font-bold text-[#7096D1] uppercase mb-8 pl-1">
              HOME PAGE
            </motion.p>

            <motion.div variants={fadeInUp} className="border-l-4 border-[#081F5C] pl-6 max-w-xl">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#081F5C] mb-3">
                Protecting Businesses in a Rapidly Evolving Digital World
              </h2>
              <p className="text-[#334EAC] font-medium">
                Advanced Cyber Security Solutions Designed for Modern Enterprises
              </p>
            </motion.div>
          </motion.div>

          {/* Abstract Interactive/Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-5 relative flex flex-col justify-center items-center min-h-[450px] sm:min-h-[500px]"
          >
            {/* Interactive Kinetic Isometric/Layered Stack */}
            <div className="relative w-full max-w-[360px] aspect-[4/5] flex flex-col justify-center items-center group">
              
              {/* BACK LAYER - Core Deep Tech (Stays grounded, expands on group hover) */}
              <motion.div 
                className="absolute w-full h-[140px] bg-[#081F5C] rounded-2xl p-6 border border-white/10 shadow-2xl flex flex-col justify-between"
                style={{ transform: "perspective(1000px) rotateX(25deg) rotateY(-15deg) translateY(60px) translateZ(-40px)" }}
                animate={{ y: [50, 65, 50] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ translateZ: -10, scale: 1.02 }}
              >
                <div className="flex justify-between items-start">
                  <div className="w-6 h-6 rounded-md border border-[#7096D1]/40 flex items-center justify-center text-[10px] text-[#BAD6EB] font-mono">03</div>
                  <span className="w-2 h-2 rounded-full bg-[#7096D1]" />
                </div>
                <p className="text-xs font-mono tracking-wider text-[#BAD6EB] uppercase">Root Infrastructure Encryption</p>
              </motion.div>

              {/* MIDDLE LAYER - Perimeter Analytics */}
              <motion.div 
                className="absolute w-full h-[140px] bg-[#F7F2EB] rounded-2xl p-6 border border-[#334EAC]/10 shadow-xl flex flex-col justify-between"
                style={{ transform: "perspective(1000px) rotateX(25deg) rotateY(-15deg) translateY(0px) translateZ(0px)" }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ rotateY: -5, scale: 1.03 }}
              >
                <div className="flex justify-between items-start">
                  <div className="w-6 h-6 rounded-md bg-[#334EAC]/10 flex items-center justify-center text-[10px] text-[#334EAC] font-mono">02</div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#334EAC]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7096D1]" />
                  </div>
                </div>
                <p className="text-xs font-bold tracking-tight text-[#081F5C]">Securing Digital Trust — One Layer at a Time</p>
              </motion.div>

              {/* FRONT LAYER - Pure Interactive Glassmorphic Terminal Card */}
              <motion.div 
                className="absolute w-full h-[140px] bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-[#BAD6EB] shadow-lg flex flex-col justify-between cursor-pointer"
                style={{ transform: "perspective(1000px) rotateX(25deg) rotateY(-15deg) translateY(-60px) translateZ(40px)" }}
                animate={{ y: [-60, -70, -60] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ 
                  translateY: -95,
                  translateZ: 70,
                  rotateX: 20,
                  boxShadow: "0 30px 60px rgba(8,31,92,0.12)"
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                    <span className="w-2 h-2 rounded-full bg-green-400/70" />
                  </div>
                </div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-[#334EAC] uppercase mb-0.5">HEXA MODULE</p>
                    <p className="text-sm font-black text-[#081F5C] tracking-tight">Threat Adaptive Shield</p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-[#081F5C] flex items-center justify-center text-white text-xs font-bold font-mono">
                    H
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: THE STRATEGIC INFRASTRUCTURE GRID (Core Competency & Deep Dive) */}
      <section className="bg-[#F7F2EB] py-24 px-6 lg:px-16 xl:px-24 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto">
          
          {/* Section Divider Line */}
          <div className="w-full h-[1px] bg-[#081F5C]/10 mb-16" />

          {/* Statement Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-5"
            >
              <p className="text-xs font-bold tracking-widest text-[#334EAC] uppercase mb-4">The Mission</p>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#081F5C] leading-tight">
                AtHexa Secure Technologies, we help organizations strengthen their digital infrastructure through intelligent, proactive, and reliable cyber security solutions.
              </h3>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <p className="text-lg text-[#081F5C]/80 font-medium leading-relaxed lg:pl-12 border-l border-[#7096D1]">
                From identifying vulnerabilities to responding to sophisticated cyber threats, we work alongside businesses to safeguard systems, data, applications, networks, and digital assets.
              </p>
            </motion.div>
          </div>

          {/* Immersive Structural 3-Column Split */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-[#081F5C]/5 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <h4 className="text-xl font-bold text-[#081F5C] mb-4">Cyber Resilience</h4>
                <p className="text-sm text-[#081F5C]/70 leading-relaxed">
                  In an increasingly connected environment, cyber resilience is no longer optional — it is essential.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-[#081F5C] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between min-h-[300px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#334EAC] rounded-bl-full opacity-20 pointer-events-none" />
              <div>
                <h4 className="text-xl font-bold mb-4 text-[#FFF9F0]">Full Spectrum Expertise</h4>
                <p className="text-sm text-[#BAD6EB] leading-relaxed">
                  Our expertise spans vulnerability assessments, managed security operations, cloud security, compliance readiness, incident response, and digital risk management, enabling organizations to operate securely and confidently.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-[#081F5C]/5 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <h4 className="text-xl font-bold text-[#081F5C] mb-4">Scalable Strategy</h4>
                <p className="text-sm text-[#081F5C]/70 leading-relaxed">
                  Whether you are a startup building secure foundations or a large enterprise strengthening cyber maturity, we deliver practical, scalable, and business-focused security strategies.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Minimalist Structural Footer Statement Tagline (No layout footer element) */}
          <div className="mt-24 text-center">
            <p className="text-xs uppercase font-bold tracking-[0.4em] text-[#334EAC] inline-block bg-[#FFF9F0] px-6 py-3 rounded-full border border-[#BAD6EB]">
              Securing Digital Trust — One Layer at a Time
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}