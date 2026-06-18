import React from 'react';
import { motion } from 'framer-motion';

export default function TrainingPage() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  return (
    <div className="bg-white text-[#081F5C] font-sans selection:bg-[#BAD6EB] overflow-x-hidden">
      
      {/* SECTION 1: HEADER & CORE IMPACT LAYER */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-24 pb-16 bg-white overflow-hidden">
        {/* Abstract cyber backdrop vector lines simulated via blur meshes */}
        <div className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] bg-[#BAD6EB]/30 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-[#FFF9F0] rounded-full blur-[90px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-[#334EAC]"></span>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#334EAC]">TRAINING & CERTIFICATIONS</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#081F5C] leading-none mb-4">
              Training & Certification Programs
            </h1>
            <p className="text-lg md:text-xl font-bold text-[#334EAC] mt-4 tracking-tight">
              Building Cyber Awareness, Skills & Security Readiness
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 lg:pl-12 border-t lg:border-t-0 lg:border-l border-[#081F5C]/10 pt-8 lg:pt-0"
          >
            <p className="text-base font-medium text-[#081F5C]/90 leading-relaxed mb-4">
              Technology alone cannot stop cyber threats. People play a critical role in organizational security.
            </p>
            <p className="text-base text-[#081F5C]/70 leading-relaxed mb-6">
              At Hexa Secure Technologies, we offer practical cyber security training programs designed to strengthen awareness, reduce human risk, and improve organizational preparedness against modern cyber threats.
            </p>
            <div className="inline-block bg-[#F7F2EB] border border-[#081F5C]/5 px-4 py-2 rounded-lg text-sm font-mono font-bold text-[#334EAC]">
              Target: Students, professionals, institutions, enterprises, and workforce teams.
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: DUAL-PANE WORKFORCE VS PROFESSIONAL TRAINING HUB */}
      <section className="bg-[#F7F2EB] py-24 px-6 lg:px-16 xl:px-24 border-t border-[#081F5C]/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* HUB PANE 01: CORPORATE WORKFORCE */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-3xl p-8 md:p-12 border border-[#081F5C]/5 flex flex-col justify-between shadow-xl shadow-[#081F5C]/2"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#081F5C] mb-2">
                Corporate Security Awareness Training
              </h2>
              <p className="text-sm font-bold text-[#334EAC] mb-6">Creating a Cyber-Aware Workforce</p>
              <p className="text-sm sm:text-base text-[#081F5C]/70 leading-relaxed mb-8">
                Human error remains one of the leading causes of cyber incidents. Our security awareness programs help employees understand cyber risks and adopt safer digital practices.
              </p>

              {/* Sub-Matrix Topics */}
              <div className="mb-8">
                <p className="text-[11px] font-mono font-bold tracking-wider text-[#334EAC] uppercase mb-3">Training Topics Include:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cyber Security Fundamentals", "Phishing & Email Fraud Awareness", "Password Security Best Practices",
                    "Safe Internet Usage", "Social Engineering Risks", "Data Privacy & Protection",
                    "Remote Work Security", "Workplace Security Practices", "Insider Threat Awareness"
                  ].map((topic, i) => (
                    <span key={i} className="text-xs font-bold bg-[#F7F2EB] text-[#081F5C] px-3 py-1.5 rounded-md border border-[#081F5C]/5">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Audience Bar */}
            <div className="border-t border-[#081F5C]/10 pt-6">
              <p className="text-[10px] font-mono tracking-widest text-[#7096D1] font-bold uppercase mb-2">Who Can Benefit?</p>
              <p className="text-base font-bold text-[#081F5C]/80">
                Enterprises • SMEs • Government Organizations • Healthcare Institutions • Educational Institutions • BFSI Companies • IT Organizations
              </p>
            </div>
          </motion.div>

          {/* HUB PANE 02: STUDENTS & PROFESSIONALS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#081F5C] text-white rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#334EAC]/10 rounded-tl-full pointer-events-none" />
            
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#FFF9F0] mb-2">
                Cyber Security Training for Students & Professionals
              </h2>
              <p className="text-sm font-bold text-[#BAD6EB] mb-6">Industry-Oriented Learning for Career Growth</p>
              <p className="text-sm sm:text-base text-[#BAD6EB]/70 leading-relaxed mb-8">
                We help students and aspiring cyber security professionals build practical skills aligned with current industry demands.
              </p>

              {/* Sub-Matrix Topics */}
              <div className="mb-8">
                <p className="text-[11px] font-mono font-bold tracking-wider text-[#BAD6EB] uppercase mb-3">Learning Areas Include:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Ethical Hacking Fundamentals", "VAPT Basics", "Network Security", "Cyber Threat Landscape",
                    "Security Operations Center (SOC) Fundamentals", "Cloud Security Basics",
                    "Digital Forensics Awareness", "Cyber Risk Management", "Security Tools & Concepts"
                  ].map((area, i) => (
                    <span key={i} className="text-xs font-bold bg-white/10 text-[#FFF9F0] px-3 py-1.5 rounded-md border border-white/10">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Audience Bar */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-[10px] font-mono tracking-widest text-[#BAD6EB] font-bold uppercase mb-2">Ideal For:</p>
              <p className="text-base font-bold text-[#BAD6EB]/80">
                Engineering Students • IT & Computer Science Students • Cyber Security Aspirants • Job Seekers • Working Professionals
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: ASYMMETRIC SPECIALIZED WORKSHOPS MATRIX */}
      <section className="py-24 px-6 lg:px-16 xl:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col items-start gap-2 mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#081F5C]">
              Specialized Security Workshops
            </h2>
            <p className="text-base font-medium text-[#7096D1]">Hands-On Cyber Security Learning</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Ethical Hacking Awareness" },
              { title: "Secure Coding Practices" },
              { title: "Cyber Threat Simulations" },
              { title: "Phishing Simulation Exercises" },
              { title: "Incident Response Awareness" },
              { title: "Security Best Practices" }
            ].map((wk, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-[#F7F2EB] border-l-4 border-[#334EAC] p-6 rounded-r-xl flex items-center justify-between shadow-sm min-h-[80px]"
              >
                <p className="text-base font-bold text-[#081F5C] pr-4">{wk.title}</p>
                <span className="text-[10px] font-mono text-[#7096D1] font-bold block">{wk.code}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-base text-[#081F5C]/60 font-mono mt-8 text-center">
            We conduct focused workshops designed to provide practical exposure to real-world cyber security concepts.
          </p>
        </div>
      </section>

      {/* SECTION 4: CERTIFICATION READINESS TIMELINE LINK */}
      <section className="py-24 px-6 lg:px-16 xl:px-24 bg-[#F7F2EB] relative border-t border-[#081F5C]/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-[#081F5C]">
              Certification Readiness Programs
            </h3>
            <p className="text-sm font-medium text-[#7096D1] mt-2">Supporting Career-Focused Cyber Learning</p>
          </div>

          {/* Clean, Non-Standard Row Flow Chart instead of blocks */}
          <div className="space-y-4">
            <p className="text-base font-mono text-[#081F5C]/60 mb-6">We guide learners and professionals through structured preparation aligned with globally recognized cyber security knowledge areas:</p>
            {[
              "CEH Knowledge Preparation",
              "CISSP Concept Readiness",
              "ISO 27001 Awareness",
              "Information Security Practices",
              "Governance, Risk & Compliance Basics"
            ].map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,1)" }}
                className="bg-white/60 backdrop-blur-sm border border-[#081F5C]/5 p-5 rounded-xl flex items-center gap-6 transition-all duration-300"
              >
                <span className="text-sm font-mono text-[#334EAC] font-black">0{index + 1}.</span>
                <p className="text-base font-black text-[#081F5C] tracking-tight">{cert}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE HEXA SECURITY (Structural Value Summary Matrix) */}
      <section className="py-24 px-6 lg:px-16 xl:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="w-full h-[1px] bg-[#081F5C]/10 mb-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
            <div className="lg:col-span-4">
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-[#081F5C] leading-tight">
                Why Choose Hexa Secure Training Programs?
              </h3>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pl-8">
              {[
                { title: "Practical Learning", desc: "Industry-oriented sessions designed around real-world cyber challenges." },
                { title: "Expert-Led Sessions", desc: "Programs guided by experienced cyber security professionals." },
                { title: "Interactive Training", desc: "Hands-on discussions, case studies, and practical scenarios." },
                { title: "Customized Modules", desc: "Training aligned to organizational or institutional needs." },
                { title: "Future-Ready Skills", desc: "Helping learners stay relevant in a rapidly changing cyber landscape." }
              ].map((value, idx) => (
                <div key={idx} className="border-b border-[#081F5C]/10 pb-6 flex flex-col justify-between">
                  <h4 className="text-lg font-extrabold text-[#081F5C] tracking-tight mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#334EAC]" />
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#081F5C]/70 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}