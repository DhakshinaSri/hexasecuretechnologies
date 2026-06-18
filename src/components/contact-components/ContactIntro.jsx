import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact-components/ContactForm";
import Logo from "@/assets/hslogo.png";

export default function ContactIntro() {

  return (
    <section className="py-24 bg-white overflow-hidden selection:bg-[#BAD6EB]">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 px-6 md:px-12">

        {/* Left Content */}
        <div className="lg:col-span-2 flex flex-col justify-center">

          {/* Tag */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F7F2EB] text-[#334EAC] text-[10px] font-bold uppercase tracking-[0.3em] mb-8 shadow-sm border border-[#081F5C]/5 w-fit">
            Get in Touch
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-black tracking-tight text-[#081F5C] leading-none mb-6">
            Ready to strengthen <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#334EAC] to-[#7096D1]">your cyber security posture?</span>
          </h2>

          {/* Decorative Line */}
          <div className="w-16 h-1 bg-[#334EAC] mb-8 rounded-full"></div>

          {/* Description */}
          <p className="text-[#081F5C]/70 text-base leading-relaxed font-medium mb-12 max-w-lg">
            Connect with Hexa Secure Technologies to discuss your organization’s cyber 
            security requirements. <span className="font-bold">Let’s Build a More Secure Digital Future Together </span>
          </p>

          {/* Contact Cards */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F7F2EB]/50 border border-[#081F5C]/5 hover:border-[#334EAC]/20 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#334EAC] border border-[#081F5C]/5">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#7096D1] mb-1">
                  Communication
                </p>
                <p className="font-bold text-[#081F5C] text-sm break-all">
                  contact@hexasecuretech.in
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F7F2EB]/50 border border-[#081F5C]/5 hover:border-[#334EAC]/20 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#334EAC] border border-[#081F5C]/5">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#7096D1] mb-1">
                  Location
                </p>
                <p className="font-bold text-[#081F5C] text-sm leading-relaxed">
                  DLF Cyber Greens, Tower B, DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana 122002.
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F7F2EB]/50 border border-[#081F5C]/5 hover:border-[#334EAC]/20 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#334EAC] border border-[#081F5C]/5 relative">
                <Clock size={18} />
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#334EAC] animate-pulse" />
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#7096D1] mb-1">
                  Business Hours
                </p>

                <div className="space-y-0.5">
                  <p className="font-bold text-[#081F5C] text-sm">
                    Monday – Saturday
                  </p>
                  <p className="text-[#081F5C]/60 text-xs font-mono font-bold uppercase tracking-wider">
                    09:00 AM – 06:00 PM IST
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-3 flex items-center">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}