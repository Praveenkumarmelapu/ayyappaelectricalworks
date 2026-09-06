import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall, MapPin, ArrowRight, ShieldCheck, Clock, Award, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import confetti from 'canvas-confetti';

export default function HeroSection({ activeSector, setActiveSector }) {
  const bgRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Electrical Wiring' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.05,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and mobile number.");
      return;
    }
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <section id="hero" className="relative w-full min-h-screen pt-28 pb-16 px-4 md:px-12 bg-[#0B0C10] flex items-center justify-center overflow-hidden">
      
      {/* 4K Background Worksite Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=85&w=3840&auto=format&fit=crop')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#0B0C10]/95 to-[#0B0C10] z-0 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#FFB800]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-20">
        
        {/* Split 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline & Value Propositions (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#14171F] border border-[#FFB800]/60 backdrop-blur-xl shadow-2xl">
              <MapPin className="w-4 h-4 text-[#FFB800] animate-bounce" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-extrabold text-[#FFB800]">
                ⚡ MAKKUVA BASE • RAPID FIELD DISPATCH
              </span>
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
              POWER, PRECISION & <br />
              <span className="text-gradient-yellow">HEAVY DEMOLITION</span>
            </h1>

            {/* Motto Banner */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-base font-display font-extrabold uppercase tracking-wider text-black bg-[#FFB800] px-4 py-1.5 rounded-full shadow-lg">
              <span>SAFE WORK</span> • <span>FAST SERVICE</span> • <span>COMPLETE SOLUTION</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed max-w-xl">
              Certified dual-specialty field team based in <strong className="text-white font-bold">Makkuva</strong>, serving <strong className="text-[#FFB800]">Bobbili, Salur, Parvathipuram</strong>, and surrounding Manyam mandals.
            </p>

            {/* Direct Action Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="tel:8919482946"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#F5A623] text-black font-display font-extrabold text-base uppercase px-7 py-3.5 rounded-full shadow-xl shadow-amber-500/30 hover:scale-105 transition-all"
              >
                <PhoneCall className="w-5 h-5 text-black animate-bounce" />
                <span>Call Makkuva: 89194 82946</span>
              </a>

              <a
                href="https://wa.me/918919482946?text=Hello%20Ayyappa%20Works,%20I%20need%20a%20site%20inspection%20in%20Makkuva/nearby."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-base uppercase px-6 py-3.5 rounded-full transition-all shadow-lg"
              >
                <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#FFB800]" />
                <span className="font-display font-bold text-white uppercase text-xs">100% Certified Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FFB800]" />
                <span className="font-display font-bold text-white uppercase text-xs">&lt; 45 Min Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FFB800]" />
                <span className="font-display font-bold text-white uppercase text-xs">500+ Works Done</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quick On-Site Inspection Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#14171F] p-6 sm:p-8 rounded-3xl border border-[#FFB800]/40 shadow-2xl relative">
            <div className="text-left mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFB800] font-bold">FAST SITE INSPECTION</span>
              <h3 className="text-2xl font-display font-extrabold text-white uppercase">Request Instant Visit</h3>
              <p className="text-xs text-gray-300">Makkuva Field Manager will call you back within 15 minutes.</p>
            </div>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 text-[#FFB800] flex items-center justify-center mb-3 border border-amber-500/40">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-display font-bold text-white uppercase">Request Dispatched!</h4>
                <p className="text-xs text-gray-300 mt-1">Our Makkuva supervisor is reviewing your site details.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-white/10 text-white rounded-full text-xs font-mono uppercase font-bold"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1 font-bold">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sanyasi Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0B0C10] border border-white/20 focus:border-[#FFB800] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1 font-bold">Mobile Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 89194 82946"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0B0C10] border border-white/20 focus:border-[#FFB800] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1 font-bold">Required Work Scope *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0B0C10] border border-white/20 focus:border-[#FFB800] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none font-semibold"
                  >
                    <option value="Electrical Wiring">Electrical Wiring & 3-Phase DB Panel</option>
                    <option value="Building Demolition">House & Building Demolition</option>
                    <option value="Diamond Core Cutting">Diamond Core Cutting (AC & Exhaust)</option>
                    <option value="Plumbing Pipelines">CPVC/UPVC Water Plumbing Lines</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#F5A623] text-black font-display font-extrabold uppercase text-sm rounded-xl shadow-xl flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
                >
                  <Send className="w-4 h-4" />
                  Dispatch Makkuva Supervisor
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
