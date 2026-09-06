import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal, Layers, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full mb-16">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-hazardYellow uppercase">
          <Sparkles className="w-3.5 h-3.5" /> INTERACTIVE BEFORE / AFTER TRANSFORMATION
        </div>
      </div>

      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 select-none cursor-ew-resize group"
      >
        {/* AFTER IMAGE (Background - Clean Slab & Finished Electrical Panel) */}
        <div className="absolute inset-0 w-full h-full bg-[#14171F]">
          <img
            src="/assets/electrical_panel_showcase.png"
            alt="Finished Electrical Engineering Panel"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/50 text-emerald-400 font-display font-bold uppercase text-xs tracking-wider shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            AFTER: Clean Cleared Slab & Finished Panel
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped Foreground - Heavy Concrete Demolition Rubble) */}
        <div
          className="absolute top-0 left-0 bottom-0 overflow-hidden bg-[#0B0C10]"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src="/assets/demolition_before_after.png"
            alt="Heavy Concrete Wall Demolition Site"
            className="absolute top-0 left-0 h-full max-w-none object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/50 text-hazardYellow font-display font-bold uppercase text-xs tracking-wider shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            BEFORE: Heavy Demolition & Chasing Debris
          </div>
        </div>

        {/* SLIDER DIVIDER HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-hazardYellow via-amber-400 to-hazardGold shadow-[0_0_15px_rgba(245,166,35,0.8)] cursor-ew-resize"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-hazardYellow border-2 border-black flex items-center justify-center text-black shadow-2xl group-hover:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5 font-bold" />
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-3 font-mono">
        ← Drag slider to compare raw heavy demolition breaking with finished engineered installation →
      </p>
    </div>
  );
}
