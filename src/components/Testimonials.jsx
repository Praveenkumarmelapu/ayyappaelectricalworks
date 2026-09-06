import React from 'react';
import { Star, CheckCircle, Quote, MapPin } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "P. Sanyasi Rao",
      role: "Property Owner",
      location: "Makkuva Main Road",
      scope: "House Demolition & Slab Breaking",
      rating: 5,
      comment: "Called them for complete old house demolition and slab breaking. Their team arrived on time with hydraulic breaker equipment. Clean and safe work.",
    },
    {
      id: 2,
      name: "G. Venkata Ramana",
      role: "Homeowner",
      location: "Near Makkuva Bus Stand",
      scope: "Full House Wiring & DB Setup",
      rating: 5,
      comment: "Full house electrical wiring and panel board setup done with zero issues. Very polite and expert technicians.",
    },
    {
      id: 3,
      name: "K. Apparao",
      role: "Residential Builder",
      location: "Bobbili Road, Makkuva",
      scope: "Water Pipeline & CPVC Fitting",
      rating: 5,
      comment: "Solved a major underground water pipe leakage and replaced bathroom CPVC fittings within 3 hours. Excellent response.",
    },
    {
      id: 4,
      name: "Ch. Suresh",
      role: "Commercial Facility Manager",
      location: "Salur Mandal",
      scope: "AC & Exhaust Core Cutting",
      rating: 5,
      comment: "Core cutting for kitchen exhaust and AC pipelines without vibration cracks. Highly recommended.",
    },
  ];

  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-[#0B0C10] relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 mb-4 text-xs font-mono tracking-widest text-[#FFB800] uppercase font-bold">
          HYPER-LOCAL MAKKUVA CLIENT REVIEWS
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
          What Makkuva Residents <span className="text-gradient-yellow">Say</span>
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base font-light">
          Real client reviews from Makkuva Main Road, Bus Stand Colony, Bobbili Road, and Salur Mandal.
        </p>
      </div>

      {/* Horizontal Scrollable Carousel on Mobile & Marquee on Desktop */}
      <div className="relative w-full overflow-hidden">
        <div className="hidden sm:block absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0B0C10] to-transparent z-10 pointer-events-none" />
        <div className="hidden sm:block absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0B0C10] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 overflow-x-auto sm:overflow-hidden scrollbar-none snap-x snap-mandatory sm:animate-marquee sm:hover:[animation-play-state:paused] py-4 px-4 sm:px-0">
          {reviews.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="w-[280px] sm:w-[380px] flex-shrink-0 snap-start card-rim-light bg-[#14171F] p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#FFB800]/50 transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/30 font-bold">
                    MAKKUVA CLIENT
                  </span>
                </div>

                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500/30 mb-2" />

                <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed mb-4 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-base font-display font-bold text-white uppercase flex items-center gap-1">
                    {rev.name}
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#FFB800]" />
                    {rev.location}
                  </p>
                </div>
                <div className="text-[9px] sm:text-[10px] text-amber-400 font-mono text-right max-w-[110px] font-bold">
                  {rev.scope}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
