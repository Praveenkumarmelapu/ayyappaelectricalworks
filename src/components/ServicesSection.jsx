import React from 'react';
import { Zap, Hammer, Wrench, Sparkles, CheckCircle2, ChevronRight, PhoneCall } from 'lucide-react';

export default function ServicesSection({ activeSector, setActiveSector }) {
  const serviceCards = [
    {
      id: "electrical",
      title: "Electrical Wiring & 3-Phase Panels",
      icon: Zap,
      iconBg: "bg-amber-500/20 text-[#FFB800]",
      badge: "ELECTRICAL SPECIALTY",
      badgeColor: "bg-amber-500/20 text-[#FFB800] border-amber-500/40",
      items: [
        { title: "House & Villa Concealed Wiring", desc: "Phase wiring, PVC conduit fitting, main switchboard mounting & rewiring." },
        { title: "3-Phase MCB & DB Distribution Panels", desc: "Main DB box dressing, busbar wiring, surge protection & RCCB leak safety." },
        { title: "Inverter & Generator Backup Lines", desc: "Dual supply changeover switches & dedicated backup line setup." },
        { title: "Chemical Gel Earthing Pits", desc: "Copper plate and GI chemical grounding for surge & lightning safety." },
      ]
    },
    {
      id: "demolition",
      title: "Heavy House & Building Demolition",
      icon: Hammer,
      iconBg: "bg-red-500/20 text-red-400",
      badge: "DEMOLITION SPECIALTY",
      badgeColor: "bg-red-500/20 text-red-400 border-red-500/40",
      items: [
        { title: "Full Structural House Demolition", desc: "Complete mechanical & manual demolition of old residential & commercial buildings." },
        { title: "Hydraulic Breaker & Jackhammer Work", desc: "Heavy breaking for RCC columns, footings, retaining walls & thick slabs." },
        { title: "RCC Roof Slab Breaking & Pillar Trimming", desc: "Vibration-monitored slab breaking and column trimming without damaging adjacent walls." },
        { title: "Debris Clearing & Rubble Hauling", desc: "Post-demolition rubble removal, copper scrap sorting, and site leveling." },
      ]
    },
    {
      id: "core-cutting",
      title: "Diamond Core Drilling & Wall Sawing",
      icon: Sparkles,
      iconBg: "bg-cyan-500/20 text-cyan-400",
      badge: "PRECISION CUTTING",
      badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
      items: [
        { title: "Diamond Core Drilling (25mm - 300mm)", desc: "Dust-free wet core drilling for AC pipes, kitchen exhaust fans, and plumbing passages." },
        { title: "RCC Wall Sawing & Door Openings", desc: "Heavy diamond saw cutting for stairwell openings, elevator shafts & door cutouts." },
        { title: "Concealed Wall Grooving & Chasing", desc: "Dust-extracted groove cutting into brick & concrete walls for electrical conduit." },
        { title: "Pillar & Beam Core Sampling", desc: "Structural core cutting without causing cracks in reinforced concrete." },
      ]
    },
    {
      id: "plumbing",
      title: "CPVC Plumbing & Pipeline Networks",
      icon: Wrench,
      iconBg: "bg-blue-500/20 text-blue-400",
      badge: "PLUMBING SPECIALTY",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/40",
      items: [
        { title: "CPVC & UPVC Water Supply Piping", desc: "Concealed hot & cold water piping networks for multi-story homes & villas." },
        { title: "Sanitary Diverters & Bathroom Fittings", desc: "Concealed diverters, thermostatic shower panels, wall-hung closets & mixers." },
        { title: "Underground Leakage Repair", desc: "10 Bar pressure testing, underground pipe leak fixes & blockage clearance." },
        { title: "Borewell & Pump Piping Connections", desc: "Heavy PVC pipeline connection for agricultural borewells & overhead tanks." },
      ]
    }
  ];

  const filteredCards = activeSector === 'electrical'
    ? serviceCards.filter(c => c.id === 'electrical' || c.id === 'plumbing')
    : activeSector === 'demolition'
    ? serviceCards.filter(c => c.id === 'demolition' || c.id === 'core-cutting')
    : serviceCards;

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFB800]/15 border border-[#FFB800]/50 mb-3 text-xs font-mono text-[#FFB800] uppercase font-extrabold shadow-lg">
              OUR FIELD CAPABILITIES
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white">
              What We Are <span className="text-gradient-yellow">Servicing</span>
            </h2>
            <p className="text-gray-200 text-sm sm:text-base font-light mt-2 max-w-xl">
              High-visibility breakdown of our 4 major field service departments operating from Makkuva.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex bg-[#14171F] p-1.5 rounded-full border border-white/20 flex-wrap gap-1 shadow-xl">
            <button
              onClick={() => setActiveSector('electrical')}
              className={`px-5 py-2 rounded-full text-xs font-display font-extrabold uppercase tracking-wider transition-all ${
                activeSector === 'electrical'
                  ? 'bg-gradient-to-r from-[#FFB800] to-amber-500 text-black shadow-lg'
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              ⚡ Electrical & Plumbing
            </button>
            <button
              onClick={() => setActiveSector('demolition')}
              className={`px-5 py-2 rounded-full text-xs font-display font-extrabold uppercase tracking-wider transition-all ${
                activeSector === 'demolition'
                  ? 'bg-gradient-to-r from-[#FFB800] to-amber-500 text-black shadow-lg'
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              🔨 Demolition & Breaking
            </button>
            <button
              onClick={() => setActiveSector('all')}
              className={`px-5 py-2 rounded-full text-xs font-display font-extrabold uppercase tracking-wider transition-all ${
                activeSector === 'all'
                  ? 'bg-white/20 text-white font-bold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              All Services
            </button>
          </div>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="card-rim-light bg-[#14171F] p-7 rounded-3xl border border-white/15 hover:border-[#FFB800] transition-all duration-300 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Card Title & Badge */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl ${card.iconBg}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-wide">
                        {card.title}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border font-bold ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* High Contrast Service Items */}
                  <div className="space-y-4">
                    {card.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0B0C10] border border-white/15 hover:border-[#FFB800]/50 transition-all text-left">
                        <CheckCircle2 className="w-5 h-5 text-[#FFB800] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-base font-display font-extrabold text-white uppercase tracking-wide mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-200 font-normal leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Call Action */}
                <div className="pt-5 mt-6 border-t border-white/15 flex items-center justify-between">
                  <span className="font-mono text-gray-300 text-xs font-bold">Makkuva Technical Crew Dispatch</span>
                  <a
                    href="tel:8919482946"
                    className="font-display font-extrabold text-[#FFB800] hover:text-white uppercase text-sm flex items-center gap-1"
                  >
                    <span>Book Inspection</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
