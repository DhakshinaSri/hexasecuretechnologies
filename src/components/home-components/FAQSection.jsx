import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  // State tracking the currently open accordion index
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "What is VAPT and why is it important?",
      a: "Vulnerability Assessment & Penetration Testing (VAPT) helps organizations identify vulnerabilities in applications, systems, and networks before attackers exploit them. It improves overall cyber resilience and strengthens security posture."
    },
    {
      q: "What industries does Hexa Secure Technologies serve?",
      a: "We support startups, SMEs, enterprises, educational institutions, healthcare organizations, government departments, BFSI companies, and IT organizations."
    },
    {
      q: "What is SOC as a Service?",
      a: "SOC as a Service provides continuous monitoring, threat detection, analysis, and incident response support to help organizations identify cyber risks in real time."
    },
    {
      q: "Why is cyber security awareness training important?",
      a: "Employees are often targeted through phishing, malware, and social engineering attacks. Awareness training helps reduce human risk and improves organizational security culture."
    },
    {
      q: "How often should an organization conduct VAPT?",
      a: "Organizations should ideally conduct VAPT periodically, especially after infrastructure changes, new deployments, cloud migration, or compliance requirements."
    },
    {
      q: "Does Hexa Secure Technologies provide cloud security services?",
      a: "Yes. We help organizations secure cloud environments through risk assessments, security reviews, access management, and cloud protection strategies."
    },
    {
      q: "What compliance frameworks do you support?",
      a: "We support organizations with security readiness for: ISO 27001, SOC 2, GDPR, RBI Security Guidelines, and HIPAA Compliance."
    },
    {
      q: "Do you provide cyber security training for colleges and students?",
      a: "Yes. We offer awareness sessions, workshops, and industry-oriented cyber security training programs for colleges, universities, and aspiring professionals."
    },
    {
      q: "What should an organization do during a cyber incident?",
      a: "Organizations should isolate affected systems, avoid unauthorized changes, preserve evidence, and immediately involve cyber security experts for incident response and containment."
    },
    {
      q: "Why choose Hexa Secure Technologies?",
      a: "We combine technical expertise, proactive monitoring, industry-focused solutions, practical implementation, and trust-driven partnerships to help organizations strengthen cyber resilience and secure digital operations."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-16 xl:px-24 bg-white text-[#081F5C] font-sans relative overflow-hidden">
      
      {/* Structural Atmospheric Background Element */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#D0E3FF]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Column Header Info */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-0.5 w-12 bg-[#334EAC]"></span>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#334EAC]">FAQ</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#081F5C] leading-none mb-6">
            Frequently <br />Asked Questions
          </h2>
        </div>

        {/* Right Column Interactive Accordions List */}
        <div className="lg:col-span-8 space-y-3 w-full">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#334EAC] shadow-lg shadow-[#081F5C]/5' : 'border-[#081F5C]/5'
                }`}
              >
                {/* Accordion Trigger Header Bar */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-6 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold text-[#7096D1] select-none">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <h3 className="text-base font-bold tracking-tight text-[#081F5C] transition-colors duration-200">
                      {faq.q}
                    </h3>
                  </div>
                  
                  {/* Dynamic Custom Rotating Cross-to-Minus Indicator Icon */}
                  <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                    <span className="absolute w-3 h-0.5 bg-[#334EAC] rounded-full" />
                    <motion.span 
                      animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.25 }}
                      className="absolute w-0.5 h-3 bg-[#334EAC] rounded-full"
                    />
                  </div>
                </button>

                {/* Animated Inner Content Node */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-[#081F5C]/5 lg:ml-9">
                        <p className="text-sm text-[#081F5C]/80 leading-relaxed font-medium">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}