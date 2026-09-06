import React from 'react';
import { PhoneCall, ShieldCheck, Zap, Hammer, Layers, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080A] text-gray-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hazardYellow to-amber-600 text-black font-extrabold font-display text-xl flex items-center justify-center shadow-lg">
                A
              </div>
              <span className="font-display font-extrabold text-2xl text-white tracking-wider">
                AYYAPPA <span className="text-hazardYellow">ENTERPRISES</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Dual-specialty contractors offering heavy industrial building demolition, diamond core cutting, concealed electrical wiring & commercial plumbing.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-hazardYellow">
              SAFE WORK • FAST SERVICE • COMPLETE SOLUTION
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-4">Core Work Sectors</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-hazardYellow transition-colors flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> House & Commercial Wiring
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-hazardYellow transition-colors flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> MCB & DB Panel Board Setup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-hazardYellow transition-colors flex items-center gap-1.5">
                  <Hammer className="w-3.5 h-3.5 text-amber-400" /> Building & House Demolition
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-hazardYellow transition-colors flex items-center gap-1.5">
                  <Hammer className="w-3.5 h-3.5 text-amber-400" /> RCC Core & Slab Cutting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-hazardYellow transition-colors flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" /> Concealed Wall Chasing
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Actions */}
          <div>
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-4">Direct Contact & Support</h4>
            <div className="space-y-2.5">
              <a
                href="tel:8919482946"
                aria-label="Call Primary Dispatch"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/50 transition-all text-white group"
              >
                <div className="w-8 h-8 rounded-full bg-[#FFB800] text-black flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <div className="text-xs font-display font-bold text-white">Call Field Dispatch</div>
                  <div className="text-[10px] text-amber-400">Primary Technical Line</div>
                </div>
              </a>

              <a
                href="tel:6304426153"
                aria-label="Call Demolition Line"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/50 transition-all text-white group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <div className="text-xs font-display font-bold text-white">Call Demolition Support</div>
                  <div className="text-[10px] text-gray-400">Structural Breaking Line</div>
                </div>
              </a>

              <a
                href="https://wa.me/918919482946?text=Hello%20Ayyappa%20Works,%20I%20need%20a%20site%20inspection."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 hover:border-emerald-400 transition-all text-white group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-110 transition-transform">
                  💬
                </div>
                <div>
                  <div className="text-xs font-display font-bold text-white">Chat on WhatsApp</div>
                  <div className="text-[10px] text-emerald-400">Instant Message Dispatch</div>
                </div>
              </a>
            </div>
          </div>

          {/* Compliance & Operations */}
          <div>
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-4">Safety & Operational Specs</h4>
            <div className="p-4 rounded-2xl bg-[#14171F] border border-white/10 text-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" /> 100% Certified Field Staff
              </div>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                All field staff wear high-visibility hazard gear, safety harnesses, dust masks, and acoustic ear protection.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} Ayyappa Enterprises. All rights reserved. Precision Electrical & Heavy Demolition Works.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2.5 rounded-full bg-white/5 hover:bg-amber-500 text-gray-400 hover:text-black transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
