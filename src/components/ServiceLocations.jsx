import React from 'react';
import { MapPin, Navigation, Clock, PhoneCall, ShieldCheck } from 'lucide-react';

export default function ServiceLocations() {
  const locations = [
    {
      name: "Makkuva Base Hub & Town",
      eta: "Immediate Arrival",
      type: "Primary Base Workshop",
      services: "Full House Wiring, Building Demolition, Core Cutting, Pipe Fitting",
      phone: "89194 82946",
    },
    {
      name: "Bobbili Industrial & Town",
      eta: "25 – 35 Min Dispatch",
      type: "Industrial & Commercial Unit",
      services: "3-Phase Panel Setup, Industrial Conduit, RCC Slab Breaking",
      phone: "89194 82946",
    },
    {
      name: "Salur Highway Corridor",
      eta: "30 – 40 Min Dispatch",
      type: "Commercial & Field Support",
      services: "Drainage Pipeline Fitting, Wall Chasing, Wall Sawing",
      phone: "63044 26153",
    },
    {
      name: "Parvathipuram Region",
      eta: "35 – 45 Min Dispatch",
      type: "Town Field Unit",
      services: "House Demolition, Chemical Earthing, Water Pipeline Network",
      phone: "63044 26153",
    },
  ];

  return (
    <section id="locations" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 mb-4 text-xs font-mono tracking-widest text-[#FFB800] uppercase font-bold">
            <MapPin className="w-3.5 h-3.5" /> PRIMARY BASE: MAKKUVA
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white mb-4">
            Makkuva Base & <span className="text-gradient-yellow">Coverage Network</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            Headquartered in Makkuva with dedicated mobile technical crews and heavy machinery equipment ready for instant site dispatch across Bobbili, Salur, and Parvathipuram.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className={`card-rim-light bg-[#14171F] p-7 rounded-3xl border transition-all duration-300 group flex flex-col justify-between ${
                idx === 0 ? 'border-[#FFB800] shadow-xl shadow-amber-500/10' : 'border-white/10 hover:border-[#FFB800]/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded-full font-bold">
                    {loc.eta}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white uppercase mb-2 group-hover:text-[#FFB800] transition-colors">
                  {loc.name}
                </h3>

                <span className="text-xs font-mono text-[#FFB800] block mb-3 font-semibold">
                  {loc.type}
                </span>

                <p className="text-xs text-gray-300 leading-relaxed mb-6 font-light">
                  {loc.services}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-400 uppercase">Field Hotline</span>
                <a
                  href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 text-xs font-display font-bold text-[#FFB800] hover:text-white transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  {loc.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
