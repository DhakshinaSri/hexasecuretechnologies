import React from 'react';
import { motion } from 'framer-motion';

export default function SecuritySection() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-24 px-6 lg:px-16 xl:px-24 bg-white text-[#081F5C] font-sans relative overflow-hidden border-t border-[#081F5C]/5">
      
      {/* Structural Atmospheric Background Element */}
      <div className="absolute top-[50%] left-[-10%] w-[35vw] h-[35vw] bg-[#FFF9F0] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#081F5C] leading-none">
              Our Security <br />Philosophy
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-7 lg:pl-12 border-l border-[#081F5C]/10 space-y-4"
          >
            <p className="text-xl font-bold tracking-tight text-[#334EAC] leading-relaxed">
              At Hexa Secure Technologies, we focus on creating a security culture that is proactive rather than reactive. Our goal is to help organizations move beyond basic defence and build sustainable cyber resilience.
            </p>
            <p className="text-base font-medium text-[#081F5C]/70 leading-relaxed">
              We combine technology, expertise, monitoring, compliance, and awareness to create practical security strategies tailored to every business environment.
            </p>
          </motion.div>
        </div>

        {/* Triple Pillar Geometric Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { tag: "PREVENT", label: "Prevention.", bg: "bg-[#F7F2EB]", text: "text-[#081F5C]", border: "border-[#081F5C]/5" },
            { tag: "PROTECT", label: "Protection.", bg: "bg-[#081F5C]", text: "text-white", border: "border-transparent" },
            { tag: "PREPARE", label: "Preparedness.", bg: "bg-white", text: "text-[#081F5C]", border: "border-[#BAD6EB]" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`${item.bg} ${item.text} ${item.border} border p-8 rounded-2xl flex flex-col justify-between min-h-22.5 shadow-sm`}
            >
              <div className="flex justify-between items-center">
                <span className={`w-1.5 h-1.5 rounded-full ${index === 1 ? 'bg-[#FFF9F0]' : 'bg-[#334EAC]'}`} />
              </div>
              
              <div className="mt-8">
                <h4 className="text-2xl font-black tracking-tight uppercase font-sans">
                  {item.label}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}