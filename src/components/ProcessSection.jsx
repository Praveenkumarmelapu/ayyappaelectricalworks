import React from 'react';
import { Search, FileText, Cpu, CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Site Visit & Structural Assessment",
      desc: "Senior supervisor visits site within 30-45 mins across Bobbili, Parvathipuram, Salur, or Makkuva to evaluate load requirements and wall chasing paths.",
      icon: Search,
    },
    {
      num: "02",
      title: "Blueprint & Quote Planning",
      desc: "Transparent breakdown of electrical specs, conduit layouts, core cutting diameters, demolition safety plan, and fixed budget estimation.",
      icon: FileText,
    },
    {
      num: "03",
      title: "Execution & Work Progress",
      desc: "Hydraulic breaker demolition, diamond core drilling, RCC slab sawing, concealed conduit chasing, and CPVC pipe fitting executed with zero delay.",
      icon: Cpu,
    },
    {
      num: "04",
      title: "Final Testing & Handover",
      desc: "High-voltage insulation testing, leak checks, post-demolition rubble clearance, copper scrap sorting, and formal safety certification handover.",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="process" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0C10]">
      
      {/* Background Image: Architectural Blueprint */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />

      <div className="absolute inset-0 bg-[#0B0C10]/95 backdrop-blur-sm z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 mb-4 text-xs font-mono tracking-widest text-[#FFB800] uppercase font-bold">
            OPERATIONAL METHODOLOGY
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white mb-4">
            How We Work: <span className="text-gradient-yellow">4-Step Field Protocol</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            Engineered workflow ensuring zero structural damage to adjacent properties and 100% compliance with electrical safety standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="card-rim-light bg-[#14171F]/90 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#FFB800]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-display font-extrabold text-[#FFB800] tracking-wider">
                      {step.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-[#FFB800]/10 text-[#FFB800] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white uppercase mb-3 group-hover:text-[#FFB800] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400 uppercase">
                  <span>STAGE {step.num} VERIFIED</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
