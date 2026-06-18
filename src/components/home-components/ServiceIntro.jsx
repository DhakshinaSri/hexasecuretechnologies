import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ServiceIntro() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const previewServices = [
    { title: "Vulnerability Assessment & Penetration Testing (VAPT)", code: "SRV_01" },
    { title: "SOC / SOC as a Service", code: "SRV_02" },
    { title: "Cloud Security Solutions", code: "SRV_03" },
    { title: "Red Teaming Replications", code: "SRV_04" },
    { title: "Incident Response & Mitigation", code: "SRV_05" },
    { title: "Digital Cyber Forensics", code: "SRV_06" }
  ];

  return (
    <section className="py-24 px-6 lg:px-16 xl:px-24 bg-white text-[#081F5C] font-sans relative overflow-hidden border-t border-[#081F5C]/5">
      
      {/* Structural Atmospheric Backdrop Element */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-[#F7F2EB] rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
        
        {/* Left Column: Contextual Intro & Core Navigation Trigger */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col justify-between min-h-100">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-[#334EAC]"></span>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#334EAC]">OUR CAPABILITIES</p>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#081F5C] leading-none mb-6">
              Comprehensive <br />Cyber Security <br />Solutions
            </h2>
            
            <p className="text-base font-medium text-[#081F5C]/70 leading-relaxed max-w-md mb-8">
              From identifying vulnerabilities to responding to sophisticated cyber threats, we deliver practical, scalable, and business-focused security strategies designed to protect infrastructure and safeguard modern digital assets.
            </p>
          </motion.div>

          {/* Premium UI Action Element (Navigates to whole service page using react router Link) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4"
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-6 group cursor-pointer bg-[#081F5C] text-white py-4 px-8 rounded-xl font-bold text-sm tracking-wide shadow-xl shadow-[#081F5C]/10 transition-all duration-300 hover:bg-[#334EAC] hover:shadow-2xl"
            >
              Explore Full Capabilities Matrix
              <motion.span 
                className="font-mono text-base font-black text-[#BAD6EB] group-hover:translate-x-1.5 transition-transform duration-200"
              >
                &rarr;
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Interactive Service Matrix Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {previewServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "#F7F2EB",
                borderColor: "#334EAC" 
              }}
              className="bg-white border border-[#081F5C]/10 p-6 rounded-2xl min-h-25 flex flex-col justify-between transition-colors duration-200 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#334EAC]" />
              </div>
              
              <h3 className="text-base font-black tracking-tight text-[#081F5C] leading-snug mt-6">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}