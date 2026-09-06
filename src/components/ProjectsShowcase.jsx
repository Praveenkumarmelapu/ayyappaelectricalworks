import React, { useRef } from 'react';
import { MapPin, Clock, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsShowcase() {
  const carouselRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "RCC Slab Breaking & Debris Clearing",
      category: "Demolition",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop",
      location: "Makkuva Town",
      desc: "Controlled breaker demolition of heavy roof slabs and pillar trimming with total rubble hauling.",
    },
    {
      id: 2,
      title: "3-Phase DB Box Wiring & Circuit Testing",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=1200&auto=format&fit=crop",
      location: "Bobbili Road",
      desc: "Main DB switchboard wiring, copper earthing pits, and inverter circuit installation.",
    },
    {
      id: 3,
      title: "RCC Wall Core Drilling & Pipe Chasing",
      category: "Core Cutting",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      location: "Salur Mandal",
      desc: "Wet diamond core drilling for AC ducts and concealed wall grooving without structural cracks.",
    },
    {
      id: 4,
      title: "Underground Water Pipeline & Sanitary Setup",
      category: "Plumbing",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      location: "Makkuva Colony",
      desc: "Concealed CPVC/UPVC water network setup, bathroom diverter fittings, and pressure checks.",
    },
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Carousel Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 mb-2 text-xs font-mono tracking-widest text-[#FFB800] uppercase font-bold">
              REAL WORKSITE CAROUSEL
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-white">
              Recent Work <span className="text-gradient-yellow">Showcase</span>
            </h2>
          </div>

          {/* Left / Right Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-[#14171F] border border-white/15 text-white hover:bg-amber-500 hover:text-black transition-colors"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-[#14171F] border border-white/15 text-white hover:bg-amber-500 hover:text-black transition-colors"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Compact Horizontal Slider Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[280px] sm:w-[360px] max-w-[85vw] flex-shrink-0 snap-start card-rim-light bg-[#14171F] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#FFB800]/50 transition-all duration-300 group shadow-2xl flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 text-amber-400 font-mono text-[11px] uppercase font-bold">
                  {project.category}
                </div>
                <div className="absolute top-3 right-3 bg-emerald-500/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/50 text-emerald-400 font-mono text-[10px] flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3" /> VERIFIED
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase mb-2 group-hover:text-[#FFB800] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span className="flex items-center gap-1 text-[#FFB800]">
                    <MapPin className="w-3.5 h-3.5 text-[#FFB800]" />
                    {project.location}
                  </span>
                  <span className="text-[10px] text-gray-400">Field Handover</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
