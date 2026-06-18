import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesPage() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-white text-[#081F5C] font-sans selection:bg-[#BAD6EB]">
      
      {/* SECTION 1: HEADER IDENTITY LAYER */}
      <section className="relative min-h-[50vh] flex flex-col justify-end px-6 lg:px-16 xl:px-24 pt-24 pb-16 bg-white overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#D0E3FF]/40 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-[#334EAC]"></span>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#334EAC]">OUR CORE SERVICES</p>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-black tracking-tight text-[#081F5C] leading-tight mb-4">
              Comprehensive Cyber Security Solutions for Every Business Need
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE INTERACTIVE SCROLL-STACKING CONTAINER */}
      {/* This structural setup triggers sticky overlay stacking mechanics across devices */}
      <div className="relative z-20">
        
        {/* CARD STACK 01: VAPT */}
        <section className="sticky top-0 min-h-screen bg-white text-[#081F5C] flex items-center px-6 lg:px-16 xl:px-24 py-16 border-t border-[#081F5C]/10 shadow-[0_-20px_40px_rgba(8,31,92,0.02)]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#081F5C] mt-2 mb-4">
                Vulnerability Assessment & Penetration Testing (VAPT)
              </h2>
              <p className="text-base font-medium text-[#334EAC] mb-4">Identify security gaps before attackers do.</p>
              <p className="text-sm text-[#081F5C]/80 leading-relaxed">
                Our VAPT services help organizations assess vulnerabilities in networks, applications, cloud systems, APIs, and digital infrastructure to minimize risks and improve security posture.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#F7F2EB] p-8 md:p-10 rounded-3xl border border-[#334EAC]/10">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-6">Our VAPT Services Include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Web Application Security Testing",
                  "Mobile Application Security Testing",
                  "API Security Assessment",
                  "Internal & External Network Testing",
                  "Infrastructure Security Assessment",
                  "Vulnerability Remediation Guidance"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-[#081F5C]/5 text-sm font-bold tracking-tight text-[#081F5C] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#334EAC]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CARD STACK 02: SOC */}
        <section className="sticky top-0 min-h-screen bg-[#F7F2EB] text-[#081F5C] flex items-center px-6 lg:px-16 xl:px-24 py-16 shadow-[0_-20px_50px_rgba(8,31,92,0.04)]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#081F5C] mt-2 mb-4">
                SOC / SOC as a Service
              </h2>
              <p className="text-base font-medium text-[#334EAC] mb-4">24/7 Threat Monitoring & Security Intelligence</p>
              <p className="text-sm text-[#081F5C]/80 leading-relaxed">
                Our Security Operations Center (SOC) solutions provide real-time monitoring, incident detection, threat analysis, and rapid response capabilities to ensure continuous security visibility.
              </p>
            </div>
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-[#081F5C]/5">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-6">SOC Capabilities:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Continuous Threat Monitoring",
                  "SIEM Management",
                  "Threat Intelligence",
                  "Security Event Correlation",
                  "Incident Detection & Escalation",
                  "Managed Security Monitoring"
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#F7F2EB] p-4 rounded-xl border border-[#081F5C]/5 text-sm font-bold tracking-tight text-[#081F5C] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#081F5C]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CARD STACK 03: CLOUD SECURITY */}
        <section className="sticky top-0 min-h-screen bg-[#081F5C] text-white flex items-center px-6 lg:px-16 xl:px-24 py-16 shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#FFF9F0] mt-2 mb-4">
                Cloud Security
              </h2>
              <p className="text-base font-medium text-[#BAD6EB] mb-4">Protecting Modern Cloud Environments</p>
              <p className="text-sm text-[#BAD6EB]/80 leading-relaxed">
                As businesses migrate to cloud platforms, cyber risks continue to evolve. We help organizations secure multi-cloud and hybrid cloud environments through proactive security controls, visibility, and governance.
              </p>
            </div>
            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10">
              <p className="text-xs font-mono font-bold text-[#BAD6EB] uppercase tracking-wider mb-6">Cloud Security Solutions:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Cloud Risk Assessment",
                  "Cloud Configuration Review",
                  "Identity & Access Management",
                  "Data Protection Strategies",
                  "Compliance Readiness",
                  "Cloud Security Architecture"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 p-4 rounded-xl border border-white/5 text-sm font-bold tracking-tight text-[#FFF9F0] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BAD6EB]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CARD STACK 04: RED TEAMING */}
        <section className="sticky top-0 min-h-screen bg-white text-[#081F5C] flex items-center px-6 lg:px-16 xl:px-24 py-16 border-t border-[#081F5C]/10 shadow-[0_-20px_50px_rgba(8,31,92,0.06)]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#081F5C] mt-2 mb-4">
                Red Teaming
              </h2>
              <p className="text-base font-medium text-[#334EAC] mb-4">Simulating Real-World Cyber Attacks</p>
              <p className="text-sm text-[#081F5C]/80 leading-relaxed">
                Our Red Teaming exercises replicate real-world attack scenarios to test organizational readiness against advanced threats and adversarial behaviour.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#FFF9F0] p-8 md:p-10 rounded-3xl border border-[#BAD6EB]">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-6">Assessment Areas:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Social Engineering Simulation",
                  "Internal Security Testing",
                  "Physical Security Testing",
                  "Advanced Threat Simulation",
                  "Blue Team Readiness Validation"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-[#081F5C]/5 text-sm font-bold tracking-tight text-[#081F5C] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#334EAC]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CARD STACK 05: INCIDENT RESPONSE */}
        <section className="sticky top-0 min-h-screen bg-[#F7F2EB] text-[#081F5C] flex items-center px-6 lg:px-16 xl:px-24 py-16 shadow-[0_-20px_50px_rgba(8,31,92,0.04)]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#081F5C] mt-2 mb-4">
                Incident Response
              </h2>
              <p className="text-base font-medium text-[#334EAC] mb-4">Rapid Action When Security Matters Most</p>
              <p className="text-sm text-[#081F5C]/80 leading-relaxed">
                Cyber incidents demand immediate attention. Our incident response team helps organizations investigate, contain, mitigate, and recover from cyber threats while minimizing operational disruption.
              </p>
            </div>
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-[#081F5C]/5">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-6">Response Services Include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Malware Investigation",
                  "Data Breach Analysis",
                  "Threat Containment",
                  "Recovery Support",
                  "Root Cause Investigation"
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#F7F2EB] p-4 rounded-xl border border-[#081F5C]/5 text-sm font-bold tracking-tight text-[#081F5C] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#081F5C]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CARD STACK 06: CYBER FORENSICS */}
        <section className="sticky top-0 min-h-screen bg-white text-[#081F5C] flex items-center px-6 lg:px-16 xl:px-24 py-16 border-t border-[#081F5C]/10 shadow-[0_-20px_50px_rgba(8,31,92,0.06)]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#081F5C] mt-2 mb-4">
                Cyber Forensics
              </h2>
              <p className="text-base font-medium text-[#334EAC] mb-4">Digital Evidence Analysis & Investigation</p>
              <p className="text-sm text-[#081F5C]/80 leading-relaxed">
                Our cyber forensic services support organizations in identifying the source, nature, and impact of cyber incidents through structured digital investigations.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#F7F2EB] p-8 md:p-10 rounded-3xl border border-[#334EAC]/10">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-6">Capabilities Include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "System Investigation",
                  "Evidence Collection",
                  "Digital Risk Assessment",
                  "Insider Threat Investigation",
                  "Data Recovery Support"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-[#081F5C]/5 text-sm font-bold tracking-tight text-[#081F5C] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#334EAC]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CARD STACK 07: COMPLIANCE & GOVERNANCE */}
        <section className="sticky top-0 min-h-screen bg-[#F7F2EB] text-[#081F5C] flex items-center px-6 lg:px-16 xl:px-24 py-16 shadow-[0_-20px_50px_rgba(8,31,92,0.04)]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#081F5C] mt-2 mb-4">
                Compliance & Governance
              </h2>
              <p className="text-base font-medium text-[#334EAC] mb-4">Building Security with Regulatory Confidence</p>
              <p className="text-sm text-[#081F5C]/80 leading-relaxed">
                We help organizations strengthen cyber resilience while meeting industry-specific regulatory and compliance requirements.
              </p>
            </div>
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-[#081F5C]/5">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-6">Compliance Expertise:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "ISO 27001",
                  "SOC 2 Readiness",
                  "GDPR Compliance",
                  "RBI Security Guidelines",
                  "HIPAA Security Standards",
                  "Information Security Governance"
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#F7F2EB] p-4 rounded-xl border border-[#081F5C]/5 text-sm font-bold tracking-tight text-[#081F5C] text-center flex flex-col justify-center min-h-20">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CARD STACK 08: FIREWALL & NETWORK SECURITY */}
        <section className="sticky top-0 min-h-screen bg-white text-[#081F5C] flex items-center px-6 lg:px-16 xl:px-24 py-16 border-t border-[#081F5C]/10 shadow-[0_-20px_50px_rgba(8,31,92,0.06)]">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#081F5C] mt-2 mb-4">
                Firewall & Network Security
              </h2>
              <p className="text-base font-medium text-[#334EAC] mb-4">Strengthening Infrastructure Security</p>
              <p className="text-sm text-[#081F5C]/80 leading-relaxed">
                Protect your network perimeter with proactive firewall configuration, monitoring, and network defence strategies.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#FFF9F0] p-8 md:p-10 rounded-3xl border border-[#BAD6EB]">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-6">Solutions Include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Firewall Configuration & Hardening",
                  "Network Segmentation",
                  "Intrusion Detection Support",
                  "Network Monitoring",
                  "Secure Access Management"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-[#081F5C]/5 text-sm font-bold tracking-tight text-[#081F5C] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#334EAC]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* SECTION 3: INTEGRATED PROTECTION EDGE (Final Fixed Overlay Base) */}
      <section className="relative z-30 bg-[#081F5C] text-white py-24 px-6 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Managed Security Services Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#FFF9F0] mb-4">
                  Managed Security Services
                </h3>
              </div>
              <p className="text-base font-medium text-[#BAD6EB] leading-relaxed mt-8">
                Continuous Protection, Reduced Risk
              </p>
              <p className="text-sm text-[#BAD6EB]/70 leading-relaxed mt-2">
                Our managed security services provide organizations with proactive monitoring, maintenance, and security management to reduce cyber exposure.
              </p>
            </motion.div>

            {/* Website & Application Security Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white text-[#081F5C] p-8 md:p-12 rounded-3xl flex flex-col justify-between shadow-2xl"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#081F5C] mb-4">
                  Website & Application Security
                </h3>
              </div>
              <p className="text-base font-medium text-[#334EAC] leading-relaxed mt-8">
                Protecting Your Digital Presence
              </p>
              <p className="text-sm text-[#081F5C]/70 leading-relaxed mt-2">
                Applications are frequent attack targets. We secure websites, web portals, and business-critical applications against cyber vulnerabilities and threats.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}