import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function TrainingSection() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const overviewTracks = [
    { name: "Corporate Security Awareness Training", target: "Workforce Teams", code: "EDU_01" },
    { name: "Cyber Security Training for Students & Professionals", target: "Career Growth", code: "EDU_02" },
    { name: "Specialized Security Workshops", target: "Hands-on Exposure", code: "EDU_03" },
    { name: "Certification Readiness Programs", target: "Credential Preparation", code: "EDU_04" }
  ];

  return (
    <section className="py-24 px-6 lg:px-16 xl:px-24 bg-white text-[#081F5C] font-sans relative overflow-hidden border-t border-[#081F5C]/5">
      
      {/* Structural Atmospheric Backdrop Element */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-[#FFF9F0] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
        
        {/* Left Column: Contextual Core & Navigation Trigger */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col justify-between min-h-95">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-[#334EAC]"></span>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#334EAC]">SECURITY AWARENESS</p>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#081F5C] leading-none mb-6">
              Training & <br />Certifications
            </h2>
            
            <p className="text-base font-medium text-[#081F5C]/70 leading-relaxed max-w-md mb-8">
              Technology alone cannot stop cyber threats. We offer practical cyber security training programs designed to strengthen awareness, reduce human risk, and improve organizational readiness against modern threats.
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
              to="/trainingandcertifications" 
              className="inline-flex items-center gap-6 group cursor-pointer bg-[#081F5C] text-white py-4 px-8 rounded-xl font-bold text-sm tracking-wide shadow-xl shadow-[#081F5C]/10 transition-all duration-300 hover:bg-[#334EAC] hover:shadow-2xl"
            >
              Explore Training Syllabi
              <motion.span 
                className="font-mono text-base font-black text-[#BAD6EB] group-hover:translate-x-1.5 transition-transform duration-200"
              >
                &rarr;
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Interactive Educational Index Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {overviewTracks.map((track, index) => (
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
                <span className="text-[10px] font-mono tracking-wider font-bold text-[#334EAC] bg-[#FFF9F0] border border-[#BAD6EB]/60 px-2.5 py-0.5 rounded">
                  {track.target}
                </span>
              </div>
              
              <h3 className="text-base font-black tracking-tight text-[#081F5C] leading-snug mt-6">
                {track.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}