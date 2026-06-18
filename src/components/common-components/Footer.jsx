import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries Served", path: "/industriesserved" },
    { name: "Security Methodology", path: "/securitymethodology" },
    { name: "Training & Certifications", path: "/trainingandcertifications" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" }
  ];

  const servicesProvided = [
    "Vulnerability Assessment & Penetration Testing (VAPT)",
    "SOC / SOC as a Service",
    "Cloud Security",
    "Red Teaming",
    "Incident Response",
    "Cyber Forensics",
    "Compliance & Governance",
    "Firewall & Network Security"
  ];

  const trainingProvided = [
    "Corporate Security Awareness Training",
    "Cyber Security Training for Students & Professionals",
    "Specialized Security Workshops",
    "Certification Readiness Programs"
  ];

  return (
    <footer className="bg-[#081F5C] text-white border-t border-white/10 pt-20 pb-12 px-6 lg:px-16 xl:px-24 relative overflow-hidden">
      {/* Structural Vector Accent Mesh */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[#334EAC]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Columns Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12">
          
          {/* Brand Identity Pillar */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-xl font-black tracking-tight text-[#FFF9F0]">
                HEXA SECURE TECHNOLOGIES
              </p>
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#BAD6EB] mt-1">
                Securing Digital Trust
              </p>
              <p className="text-base text-[#BAD6EB]/60 mt-6 leading-relaxed max-w-sm">
                Intelligent, proactive, and reliable cyber security solutions designed to help modern enterprises protect infrastructure and build sustainable resilience.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#BAD6EB] mb-6">
              Quick Navigation
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="text-sm font-medium text-[#BAD6EB]/80 hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#BAD6EB] mb-6">
              Core Services
            </p>
            <ul className="space-y-3">
              {servicesProvided.map((service, idx) => (
                <li key={idx}>
                  <Link 
                    to="/services" 
                    className="text-sm font-medium text-[#BAD6EB]/70 hover:text-white transition-colors duration-200 block leading-tight"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Column */}
          <div className="lg:col-span-3">
            <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#BAD6EB] mb-6">
              Training Programs
            </p>
            <ul className="space-y-3">
              {trainingProvided.map((training, idx) => (
                <li key={idx}>
                  <Link 
                    to="/trainingandcertifications" 
                    className="text-sm font-medium text-[#BAD6EB]/70 hover:text-white transition-colors duration-200 block leading-tight"
                  >
                    {training}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Corporate Contact Horizontal Data-Strip (Positioned exactly above the divider line) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 pb-12 border-t border-white/5 text-xs text-[#BAD6EB]/80">
          <div>
            <p className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#7096D1] mb-1">COMMUNICATION</p>
            <p className="font-bold text-[#FFF9F0] text-base">contact@hexasecuretech.in</p>
          </div>
          <div>
            <p className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#7096D1] mb-1">Location</p>
            <p className="leading-relaxed text-[#FFF9F0]/90 text-[14px]">DLF Cyber Greens, Tower B, DLF Cyber City, DLF Phase 2, <br />Sector 24, Gurugram, Haryana 122002.</p>
          </div>
          <div>
            <p className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#7096D1] mb-1">Business Hours</p>
            <p className="font-bold text-[#FFF9F0] text-[14px]">Monday – Saturday <span className="font-mono text-[#BAD6EB]/60 font-medium ml-2">09:00 AM – 06:00 PM IST</span></p>
          </div>
        </div>

        {/* Bottom Section Divider & Metadata Layer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-[#BAD6EB]/40">
            &copy; {new Date().getFullYear()} HEXA SECURE TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}