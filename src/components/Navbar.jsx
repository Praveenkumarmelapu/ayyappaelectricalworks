import React, { useState } from 'react';
import { PhoneCall, Menu, X, ChevronDown, ChevronRight, MessageSquare, Clock } from 'lucide-react';

export default function Navbar({ activeSector, setActiveSector }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sectors = [
    { id: 'all', label: 'All Services' },
    { id: 'electrical', label: '⚡ Electrical & Plumbing' },
    { id: 'demolition', label: '🔨 Demolition & Breaking' },
  ];

  const navLinks = [
    { name: 'Services Matrix', href: '#services' },
    { name: '4-Step Roadmap', href: '#process' },
    { name: 'Projects Showcase', href: '#projects' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Client Reviews', href: '#reviews' },
    { name: 'Contact & Booking', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pb-2 pointer-events-none">
      <div className="max-w-7xl mx-auto relative pointer-events-auto">
        
        {/* Main Navbar Bar */}
        <div className="flex items-center justify-between bg-[#0B0C10]/95 backdrop-blur-md border border-[#FFB800]/30 px-4 py-3 rounded-full shadow-2xl">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFB800] to-amber-600 text-black font-extrabold text-lg flex items-center justify-center shadow-lg">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-wider text-base sm:text-xl font-extrabold text-white group-hover:text-[#FFB800] transition-colors leading-tight">
                AYYAPPA <span class="text-[#FFB800]">WORKS</span>
              </span>
              <span className="text-[10px] font-mono text-[#FFB800] font-bold flex items-center gap-1 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse"></span>
                MAKKUVA BASE
              </span>
            </div>
          </a>

          {/* Desktop Category Filters */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#14171F] p-1.5 rounded-full border border-white/15">
            {sectors.map((sector) => {
              const isActive = activeSector === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => {
                    setActiveSector(sector.id);
                    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FFB800] to-amber-500 text-black shadow-md shadow-amber-500/20 font-extrabold'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {sector.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons: Phone CTA + Interactive Dropdown Menu Button */}
          <div className="flex items-center gap-2">
            <a
              href="tel:8919482946"
              className="flex items-center gap-2 bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#F5A623] hover:from-amber-400 hover:to-[#FFB800] text-black font-display font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-lg shadow-amber-500/30 hover:scale-105 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-black animate-bounce" />
              <span className="hidden sm:inline">CALL:</span>
              <span>89194 82946</span>
            </a>

            {/* Interactive Dropdown Button */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#14171F] border border-[#FFB800]/50 text-white font-display font-bold text-xs hover:bg-[#1C202B] hover:border-[#FFB800] transition-all shadow-lg"
            >
              <Menu className="w-4 h-4 text-[#FFB800]" />
              <span className="uppercase tracking-wider">MENU</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#FFB800] transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

        </div>

        {/* Dropdown Menu Container */}
        {dropdownOpen && (
          <div className="absolute top-full right-0 mt-3 w-72 sm:w-80 bg-[#14171F] border border-[#FFB800]/40 rounded-3xl p-5 shadow-2xl z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#FFB800] mb-3 font-bold px-1 flex items-center justify-between">
              <span>Navigation Menu</span>
              <button onClick={() => setDropdownOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Jump Links */}
            <div className="space-y-1.5 mb-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0C10] hover:bg-[#FFB800]/15 border border-white/5 hover:border-[#FFB800]/50 text-gray-100 hover:text-[#FFB800] text-xs font-display font-bold uppercase transition-all"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                </a>
              ))}
            </div>

            {/* Direct Emergency Phone Links */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href="tel:8919482946"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#FFB800] text-black font-display font-extrabold text-xs uppercase"
              >
                <span className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5" /> 89194 82946
                </span>
                <span className="text-[9px] font-mono bg-black/20 px-1.5 py-0.5 rounded font-bold">PRIMARY</span>
              </a>

              <a
                href="https://wa.me/918919482946?text=Hello%20Ayyappa%20Works,%20I%20need%20a%20site%20inspection%20in%20Makkuva/nearby."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-600 text-white font-display font-bold text-xs uppercase"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Booking
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
