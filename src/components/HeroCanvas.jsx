import React from 'react';

// Cleaned up Hero background overlay (No floating boxes/clutter)
export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Subtle ambient lighting particles layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
