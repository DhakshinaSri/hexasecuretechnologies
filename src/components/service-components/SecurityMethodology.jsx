import React from 'react';
import { motion } from 'framer-motion';

export default function SecurityMethodology() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-white text-[#081F5C] font-sans selection:bg-[#BAD6EB]">

      {/* SECTION 2: METHODOLOGY INTRODUCTION LAYER */}
      <section className="bg-white pt-24 pb-12 px-6 lg:px-16 xl:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#081F5C] leading-tight">
              Our Security Methodology
            </h2>
            <p className="text-base font-medium text-[#334EAC] mt-3">
              A Structured, Proactive, and Intelligence-Driven Approach to Cyber Security
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:pl-12 border-l border-[#081F5C]/10">
            <p className="text-base font-medium text-[#081F5C]/90 leading-relaxed">
              At Hexa Secure Technologies, we believe effective cyber security goes beyond technology. It requires a strategic, continuous, and risk-focused approach that protects organizations from evolving digital threats while enabling business continuity.
            </p>
            <p className="text-sm text-[#081F5C]/70 leading-relaxed">
              Our security methodology is designed to help organizations identify vulnerabilities, strengthen defences, respond to threats, and maintain long-term cyber resilience.
            </p>
            <p className="text-xs font-mono uppercase bg-[#FFF9F0] px-4 py-2.5 rounded-lg text-[#334EAC] font-bold border border-[#BAD6EB]/60 inline-block tracking-wider">
              We follow a structured framework built around Assessment, Prevention, Detection, Response, Recovery, and Continuous Improvement.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE METHODOLOGY STACKING TRACK */}
      {/* Container holding the layered stackable framework blocks */}
      <section className="bg-white pb-32 px-6 lg:px-16 xl:px-24 relative z-20 space-y-16">
        <div className="max-w-7xl mx-auto space-y-12 relative">
          
          {/* STEP 01: ASSESS */}
          <div className="sticky top-12 bg-white rounded-3xl p-8 md:p-12 border border-[#081F5C]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl shadow-[#081F5C]/5 transition-transform duration-300">
            <div className="lg:col-span-4 relative">
              <span className="text-5xl font-black text-[#334EAC] font-mono tracking-tighter block">01.</span>
              <h3 className="text-2xl font-black tracking-tight text-[#081F5C] mt-2 mb-1">Assess</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#7096D1] font-bold">Understand Risks Before They Become Threats</p>
              <p className="text-sm text-[#081F5C]/70 mt-6 leading-relaxed">
                Every strong cyber security program begins with visibility. We evaluate your organization’s security posture to identify vulnerabilities, configuration weaknesses, operational risks, and compliance gaps.
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#F7F2EB] p-6 md:p-8 rounded-2xl border border-[#081F5C]/5 relative overflow-hidden">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-4">Our assessment process includes:</p>
              <ul className="space-y-2 text-sm font-bold text-[#081F5C]">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Vulnerability Assessment & Penetration Testing (VAPT)</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Network Security Assessment</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Website & Application Security Review</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Cloud Security Assessment</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Configuration Audits</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Risk Analysis & Exposure Mapping</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Security Gap Identification</li>
              </ul>
            </div>
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#081F5C]/10 pt-6 lg:pt-0 lg:pl-8 self-center">
              <div className="bg-[#FFF9F0] border border-[#BAD6EB] p-4 rounded-xl">
                <p className="text-[10px] font-mono font-bold text-[#7096D1] uppercase tracking-widest mb-1">OUTCOME</p>
                <p className="text-xs font-bold text-[#081F5C] leading-snug">
                  A clear understanding of vulnerabilities, cyber risks, and recommended corrective actions.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 02: PROTECT */}
          <div className="sticky top-16 bg-white rounded-3xl p-8 md:p-12 border border-[#081F5C]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl shadow-[#081F5C]/5 transition-transform duration-300">
            <div className="lg:col-span-4">
              <span className="text-5xl font-black text-[#334EAC] font-mono tracking-tighter block">02.</span>
              <h3 className="text-2xl font-black tracking-tight text-[#081F5C] mt-2 mb-1">Protect</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#7096D1] font-bold">Strengthening Security at Every Layer</p>
              <p className="text-sm text-[#081F5C]/70 mt-6 leading-relaxed">
                After identifying vulnerabilities, we implement preventive measures that help organizations reduce exposure to cyber risks and unauthorized access.
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#F7F2EB] p-6 md:p-8 rounded-2xl border border-[#081F5C]/5 relative overflow-hidden">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-4">Our protection strategy includes:</p>
              <ul className="space-y-2 text-sm font-bold text-[#081F5C]">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Firewall Security & Hardening</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Endpoint Security Recommendations</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Secure Configuration Practices</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Identity & Access Management Controls</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Data Protection Measures</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Cloud Security Controls</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Network Segmentation & Access Restrictions</li>
              </ul>
            </div>
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#081F5C]/10 pt-6 lg:pt-0 lg:pl-8 self-center">
              <div className="bg-[#FFF9F0] border border-[#BAD6EB] p-4 rounded-xl">
                <p className="text-[10px] font-mono font-bold text-[#7096D1] uppercase tracking-widest mb-1">OUTCOME</p>
                <p className="text-xs font-bold text-[#081F5C] leading-snug">
                  A stronger and more resilient cyber security foundation.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 03: DETECT */}
          <div className="sticky top-20 bg-white rounded-3xl p-8 md:p-12 border border-[#081F5C]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl shadow-[#081F5C]/5 transition-transform duration-300">
            <div className="lg:col-span-4">
              <span className="text-5xl font-black text-[#334EAC] font-mono tracking-tighter block">03.</span>
              <h3 className="text-2xl font-black tracking-tight text-[#081F5C] mt-2 mb-1">Detect</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#7096D1] font-bold">Continuous Monitoring for Emerging Threats</p>
              <p className="text-sm text-[#081F5C]/70 mt-6 leading-relaxed">
                Cyber threats evolve constantly. Early detection plays a critical role in reducing business impact. Through SOC / SOC as a Service, we help organizations monitor and identify suspicious activities before incidents escalate.
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#F7F2EB] p-6 md:p-8 rounded-2xl border border-[#081F5C]/5 relative overflow-hidden">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-4">Detection capabilities include:</p>
              <ul className="space-y-2 text-sm font-bold text-[#081F5C]">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Real-Time Threat Monitoring</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Log Analysis & Event Correlation</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Threat Intelligence Monitoring</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Security Alerts & Escalation</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Anomaly Detection</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Risk Prioritization</li>
              </ul>
            </div>
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#081F5C]/10 pt-6 lg:pt-0 lg:pl-8 self-center">
              <div className="bg-[#FFF9F0] border border-[#BAD6EB] p-4 rounded-xl">
                <p className="text-[10px] font-mono font-bold text-[#7096D1] uppercase tracking-widest mb-1">OUTCOME</p>
                <p className="text-xs font-bold text-[#081F5C] leading-snug">
                  Improved visibility and faster threat identification.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 04: RESPOND */}
          <div className="sticky top-24 bg-[#081F5C] text-white rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-2xl transition-transform duration-300">
            <div className="lg:col-span-4">
              <span className="text-5xl font-black text-[#BAD6EB] font-mono tracking-tighter block">04.</span>
              <h3 className="text-2xl font-black tracking-tight text-[#FFF9F0] mt-2 mb-1">Respond</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#BAD6EB] font-bold">Rapid Incident Handling When Every Second Matters</p>
              <p className="text-sm text-[#BAD6EB]/80 mt-6 leading-relaxed">
                Cyber incidents require immediate and structured action. Our incident response methodology focuses on rapid containment, investigation, mitigation, and recovery.
              </p>
            </div>
            <div className="lg:col-span-5 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <p className="text-xs font-mono font-bold text-[#BAD6EB] uppercase tracking-wider mb-4">Response activities include:</p>
              <ul className="space-y-2 text-sm font-bold text-[#FFF9F0]">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#BAD6EB]" /> Threat Containment</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#BAD6EB]" /> Incident Investigation</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#BAD6EB]" /> Malware Analysis</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#BAD6EB]" /> Root Cause Identification</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#BAD6EB]" /> Recovery Planning</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#BAD6EB]" /> Post-Incident Reporting</li>
              </ul>
            </div>
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 self-center">
              <div className="bg-white/10 border border-white/20 p-4 rounded-xl">
                <p className="text-[10px] font-mono font-bold text-[#BAD6EB] uppercase tracking-widest mb-1">OUTCOME</p>
                <p className="text-xs font-bold text-[#FFF9F0] leading-snug">
                  Reduced downtime, minimized damage, and faster operational recovery.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 05: RECOVER */}
          <div className="sticky top-28 bg-white rounded-3xl p-8 md:p-12 border border-[#081F5C]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl shadow-[#081F5C]/5 transition-transform duration-300">
            <div className="lg:col-span-4">
              <span className="text-5xl font-black text-[#334EAC] font-mono tracking-tighter block">05.</span>
              <h3 className="text-2xl font-black tracking-tight text-[#081F5C] mt-2 mb-1">Recover</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#7096D1] font-bold">Restoring Confidence & Business Continuity</p>
              <p className="text-sm text-[#081F5C]/70 mt-6 leading-relaxed">
                Recovery is essential after any cyber incident. We support organizations in restoring systems, strengthening controls, and reducing future risks.
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#F7F2EB] p-6 md:p-8 rounded-2xl border border-[#081F5C]/5 relative overflow-hidden">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-4">Recovery support includes:</p>
              <ul className="space-y-2 text-sm font-bold text-[#081F5C]">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Security Improvements</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Backup & Recovery Guidance</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Infrastructure Hardening</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Security Policy Recommendations</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Risk Mitigation Planning</li>
              </ul>
            </div>
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#081F5C]/10 pt-6 lg:pt-0 lg:pl-8 self-center">
              <div className="bg-[#FFF9F0] border border-[#BAD6EB] p-4 rounded-xl">
                <p className="text-[10px] font-mono font-bold text-[#7096D1] uppercase tracking-widest mb-1">OUTCOME</p>
                <p className="text-xs font-bold text-[#081F5C] leading-snug">
                  Enhanced cyber resilience and operational continuity.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 06: IMPROVE */}
          <div className="sticky top-32 bg-white rounded-3xl p-8 md:p-12 border border-[#081F5C]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl shadow-[#081F5C]/5 transition-transform duration-300">
            <div className="lg:col-span-4">
              <span className="text-5xl font-black text-[#334EAC] font-mono tracking-tighter block">06.</span>
              <h3 className="text-2xl font-black tracking-tight text-[#081F5C] mt-2 mb-1">Improve</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#7096D1] font-bold">Continuous Security Enhancement</p>
              <p className="text-sm text-[#081F5C]/70 mt-6 leading-relaxed">
                Cyber security is not a one-time process. We help organizations continuously adapt to evolving threats and compliance requirements.
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#F7F2EB] p-6 md:p-8 rounded-2xl border border-[#081F5C]/5 relative overflow-hidden">
              <p className="text-xs font-mono font-bold text-[#334EAC] uppercase tracking-wider mb-4">Continuous improvement includes:</p>
              <ul className="space-y-2 text-sm font-bold text-[#081F5C]">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Periodic Security Reviews</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Vulnerability Reassessment</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Compliance Readiness Support</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Employee Security Awareness</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Emerging Threat Monitoring</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#334EAC]" /> Security Best Practice Updates</li>
              </ul>
            </div>
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#081F5C]/10 pt-6 lg:pt-0 lg:pl-8 self-center">
              <div className="bg-[#FFF9F0] border border-[#BAD6EB] p-4 rounded-xl">
                <p className="text-[10px] font-mono font-bold text-[#7096D1] uppercase tracking-widest mb-1">OUTCOME</p>
                <p className="text-xs font-bold text-[#081F5C] leading-snug">
                  Long-term cyber maturity and stronger digital trust.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}