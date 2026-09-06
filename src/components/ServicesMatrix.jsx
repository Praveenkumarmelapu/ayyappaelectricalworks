import React from 'react';
import { Zap, Hammer, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';

export default function ServicesMatrix({ activeSector, setActiveSector }) {
  const electricalServices = [
    {
      title: "House & Building Wiring",
      desc: "Concealed phase wiring, main distribution line setup, switchboard fitting, and total electrical rewiring for residential & commercial sites.",
      tags: ["Concealed Conduit", "3-Phase Power", "Safety Verified"],
      specs: "0.5mm² - 16mm² Heavy Copper Core Wire",
    },
    {
      title: "MCB & DB Box Installation",
      desc: "Miniature Circuit Breakers, RCCB leak protection, busbar distribution panel mounting & surge protection.",
      tags: ["Short Circuit Safe", "Overload Protection"],
      specs: "Single & 3-Phase Distribution Panels",
    },
    {
      title: "Industrial Control Panel Board Works",
      desc: "Heavy industrial control panel assembly, motor starter wiring, phase indicators, and industrial automation.",
      tags: ["Star-Delta Starters", "Industrial Spec"],
      specs: "Heavy Ampere Capacity",
    },
    {
      title: "Chemical Earthing & Bonding",
      desc: "Copper/GI plate earthing, chemical gel grounding, lightning arrestor installation to protect sensitive gear.",
      tags: ["Low Resistance", "Surge Grounding"],
      specs: "< 1 Ohm Ground Resistance Target",
    },
    {
      title: "CPVC & UPVC Pipe Fitting",
      desc: "Complete concealed plumbing lines, high-pressure CPVC/UPVC water supply networks, and drainage lines.",
      tags: ["Zero Leak Guarantee", "High Pressure Rated"],
      specs: "Hot & Cold Water Supply Lines",
    },
    {
      title: "Sanitary & Bathroom Fitting",
      desc: "Wall-hung closets, concealed diverters, thermostatic shower panels, basin mixers & luxury bathroom hardware.",
      tags: ["Precision Alignment", "Leak Proof Seals"],
      specs: "Modern Sanitary Installation",
    },
    {
      title: "Water Leakage & Pipeline Repair",
      desc: "Acoustic leak detection, pipeline blockage removal, pressure testing, and emergency pipe replacement.",
      tags: ["Rapid Fix", "Non-Invasive Diagnostic"],
      specs: "Emergency Field Service",
    },
    {
      title: "Industrial Lighting & Substation Cabling",
      desc: "High-bay LED fitting, outdoor pole illumination, armor cable trenching & high-voltage cable jointing.",
      tags: ["High-Bay LED", "Armored Cable"],
      specs: "Heavy Commercial Illumination",
    },
  ];

  const demolitionServices = [
    {
      title: "House & Building Demolition",
      desc: "Complete structural demolition of residential homes, multi-story buildings, and commercial complexes.",
      tags: ["Controlled Breaking", "Debris Clearance"],
      specs: "Manual & Mechanical Hydraulic Rig Operations",
    },
    {
      title: "RCC Wall & Column Saw Cutting",
      desc: "Heavy wall saw cutting, floor slab opening creation for stairwells, elevators, and architectural retrofits.",
      tags: ["No Structural Damage", "Vibration Free"],
      specs: "Up to 400mm Thickness Sawing",
    },
    {
      title: "Heavy Slab & Foundation Breaking",
      desc: "Jackhammer breaking, hydraulic crushing of RCC columns, beams, footings, and thick structural slabs.",
      tags: ["High Impact", "Vibration Monitored"],
      specs: "Pneumatic & Electric Heavy Breakers",
    },
    {
      title: "Heavy Concrete Breaking",
      desc: "Pneumatic jackhammer breaking for thick foundations, retaining walls, and hard masonry structures.",
      tags: ["Fast Breaking", "Heavy Duty Rig"],
      specs: "High-PSI Air Compressors",
    },
    {
      title: "Diamond Core Cutting",
      desc: "Precision core drilling through RCC walls and slabs for AC ducts, plumbing pipes, electrical conduit & ventilation.",
      tags: ["Smooth Hole Finish", "Dust-Free Wet Cut"],
      specs: "Diameter Range: 25mm to 300mm",
    },
    {
      title: "Marble, Granite & Tile Cutting",
      desc: "High-speed diamond blade precision slitting and grooving for natural stone flooring, countertops, and masonry.",
      tags: ["Laser Straight", "Chip Free Edge"],
      specs: "Wet Diamond Cutting Rig",
    },
    {
      title: "Concealed Wall Chasing & Grooving",
      desc: "Dust-extracted brick & concrete groove cutting for electrical conduit piping and plumbing lines.",
      tags: ["Uniform Depth", "High Speed Grooving"],
      specs: "Dual-Blade Chasing Machines",
    },
  ];

  const showElectrical = activeSector === 'electrical' || activeSector === 'all';
  const showDemolition = activeSector === 'demolition' || activeSector === 'all';

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 mb-3 text-xs font-mono uppercase tracking-widest text-[#FFB800] font-bold">
              <Sparkles className="w-3.5 h-3.5" /> DUAL-SPECIALTY CAPABILITIES
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase text-white tracking-tight">
              Services <span className="text-gradient-yellow">Matrix</span>
            </h2>
          </div>

          {/* Sector Switcher Controls */}
          <div className="flex bg-[#14171F] p-1.5 rounded-full border border-white/15 self-start md:self-auto flex-wrap">
            <button
              onClick={() => setActiveSector('electrical')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                activeSector === 'electrical'
                  ? 'bg-gradient-to-r from-[#FFB800] to-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              ⚡ Electrical & Plumbing
            </button>
            <button
              onClick={() => setActiveSector('demolition')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                activeSector === 'demolition'
                  ? 'bg-gradient-to-r from-[#FFB800] to-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Hammer className="w-4 h-4" />
              🔨 Demolition & Cutting
            </button>
            <button
              onClick={() => setActiveSector('all')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                activeSector === 'all'
                  ? 'bg-white/20 text-white font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Works
            </button>
          </div>
        </div>

        {/* Display Electrical Services if active */}
        {showElectrical && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-white/10 text-xl font-display font-bold text-[#FFB800] uppercase">
              <Zap className="w-5 h-5 text-amber-400" />
              ⚡ Electrical & Plumbing Works
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {electricalServices.map((service, idx) => (
                <div
                  key={idx}
                  className="card-rim-light bg-[#14171F] p-6 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-[#FFB800] font-bold">SPEC #{idx + 1}</span>
                      <Zap className="w-4 h-4 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-2 uppercase group-hover:text-[#FFB800] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-amber-400">
                    {service.specs}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Display Demolition Services if active */}
        {showDemolition && (
          <div>
            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-white/10 text-xl font-display font-bold text-[#FFB800] uppercase">
              <Hammer className="w-5 h-5 text-amber-400" />
              🔨 Demolition & Core Cutting Works
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demolitionServices.map((service, idx) => (
                <div
                  key={idx}
                  className="card-rim-light bg-[#14171F] p-6 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-[#FFB800] font-bold">SPEC #{idx + 1}</span>
                      <Hammer className="w-4 h-4 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-2 uppercase group-hover:text-[#FFB800] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-amber-400">
                    {service.specs}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#14171F] via-[#1E2330] to-[#14171F] border border-[#FFB800]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-[#FFB800]/15 text-[#FFB800]">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-display font-bold text-white uppercase">Need Emergency Demolition or Electrical Rewiring?</h4>
              <p className="text-sm text-gray-300">Fast 30–45 min on-site arrival across Bobbili, Parvathipuram, Salur, & Makkuva.</p>
            </div>
          </div>

          <a
            href="tel:8919482946"
            className="flex-shrink-0 px-6 py-3.5 bg-[#FFB800] hover:bg-amber-400 text-black font-display font-bold uppercase rounded-full text-sm shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
          >
            Direct Supervisor Call: 89194 82946
          </a>
        </div>

      </div>
    </section>
  );
}
