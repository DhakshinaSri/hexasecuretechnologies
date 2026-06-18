import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPageContinued() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="bg-white text-[#081F5C] font-sans overflow-x-hidden selection:bg-[#BAD6EB]">

      {/* SECTION 3: MISSION & VISION DEEP ALIGNMENT (Split-Axis Asymmetric Grid) */}
      <section className="py-24 px-6 lg:px-16 xl:px-24 bg-white relative overflow-hidden border-t border-[#081F5C]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
          
          {/* Mission Block */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-6 flex flex-col justify-between p-8 md:p-12 rounded-3xl bg-[#F7F2EB] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#BAD6EB]/20 rounded-bl-full pointer-events-none" />
            <div>
              <h3 className="text-3xl font-black tracking-tight text-[#081F5C] mb-6">Our Mission</h3>
            </div>
            <p className="text-xl font-medium tracking-tight text-[#081F5C]/90 leading-relaxed mt-12">
              To empower organizations with trusted, intelligent, and proactive cyber security solutions that strengthen resilience, protect digital assets, and create a secure digital future.
            </p>
          </motion.div>

          {/* Vision Block */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-6 flex flex-col justify-between p-8 md:p-12 rounded-3xl bg-[#081F5C] text-white relative group overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#334EAC]/20 rounded-tr-full pointer-events-none" />
            <div>
              <h3 className="text-3xl font-black tracking-tight text-[#FFF9F0] mb-6">Our Vision</h3>
            </div>
            <p className="text-xl font-medium tracking-tight text-[#BAD6EB] leading-relaxed mt-12">
              To become a trusted cyber security partner recognized for enabling organizations to operate securely, confidently, and responsibly in a digitally connected world.
            </p>
          </motion.div>

        </div>
      </section>


      {/* SECTION 4: CORE VALUES VECTOR (Premium Minimal Row System) */}
      <section className="py-24 px-6 lg:px-16 xl:px-24 bg-[#F7F2EB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#081F5C]">
              The Foundational Pillars
            </h3>
          </div>

          {/* Interactive Stacked Rows */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="divide-y divide-[#081F5C]/10 border-t border-b divide-[#081F5C]/10 border-[#081F5C]/10"
          >
            {[
              { title: "Trust", desc: "We build lasting partnerships through transparency, accountability, and reliability." },
              { title: "Innovation", desc: "We continuously adapt to emerging cyber threats and technologies." },
              { title: "Integrity", desc: "We uphold ethical security practices and responsible cyber governance." },
              { title: "Excellence", desc: "We deliver high-quality, outcome-driven security services." }
            ].map((val, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ backgroundColor: "rgba(51, 78, 172, 0.03)", x: 10 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 items-start transition-all duration-300 px-4"
              >
                <div className="md:col-span-2 text-xs font-mono font-bold text-[#7096D1]">
                  0{i + 1}
                </div>
                <div className="md:col-span-3 text-xl font-black tracking-tight text-[#081F5C]">
                  {val.title}
                </div>
                <div className="md:col-span-7 text-base font-medium text-[#081F5C]/80 md:pl-6">
                  {val.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* SECTION 5: WHY HEXA SECURE? (The Structural Perimeter Stack) */}
      <section className="py-24 px-6 lg:px-16 xl:px-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col items-start gap-3 mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#081F5C]">
              Why Organizations Choose <br />Hexa Secure Technologies
            </h2>
          </div>

          {/* Asymmetric Technical Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Big Highlight Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 bg-[#081F5C] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-[#334EAC]/30 rounded-full blur-3xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center font-bold text-[#BAD6EB]">
                ✓
              </div>
              <div className="mt-20">
                <h4 className="text-2xl font-bold tracking-tight mb-4 text-[#FFF9F0]">Expert-Led Security</h4>
                <p className="text-sm text-[#BAD6EB] leading-relaxed">
                  Our security professionals bring practical expertise aligned with industry-recognized certifications including CEH, CISSP, and ISO frameworks.
                </p>
              </div>
            </motion.div>

            {/* Right Quad Grid Stack */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Business-Centric Approach",
                  desc: "We align cyber security with operational realities to deliver practical and scalable protection."
                },
                {
                  title: "Proactive Defence",
                  desc: "We focus on identifying risks early to reduce vulnerabilities before incidents occur."
                },
                {
                  title: "Industry-Focused Expertise",
                  desc: "We understand the unique security challenges across sectors including healthcare, BFSI, education, government, startups, and IT."
                },
                {
                  title: "Continuous Monitoring",
                  desc: "Our approach focuses on visibility, prevention, detection, and response."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-[#F7F2EB] p-8 rounded-2xl border border-[#081F5C]/5 flex flex-col justify-between transition-shadow duration-300"
                >
                  <div className="h-2 w-8 bg-[#334EAC] rounded-full mb-8" />
                  <div>
                    <h4 className="text-lg font-bold text-[#081F5C] mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[#081F5C]/70 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}