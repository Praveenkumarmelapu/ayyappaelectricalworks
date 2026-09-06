import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, CheckCircle2, Clock, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MetricsSection() {
  const containerRef = useRef(null);
  const [counts, setCounts] = useState({
    safety: 0,
    projects: 0,
    dispatch: 45,
    crew: 0,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(
            { safety: 0, projects: 0, dispatch: 45, crew: 0 },
            {
              safety: 100,
              projects: 500,
              dispatch: 45,
              crew: 100,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                setCounts({
                  safety: Math.floor(this.targets()[0].safety),
                  projects: Math.floor(this.targets()[0].projects),
                  dispatch: Math.floor(this.targets()[0].dispatch),
                  crew: Math.floor(this.targets()[0].crew),
                });
              },
            }
          );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const metrics = [
    {
      id: 'safety',
      value: `${counts.safety}%`,
      label: 'Safety Compliance',
      subtitle: 'Zero accident record maintained across all regional operations',
      icon: ShieldCheck,
    },
    {
      id: 'projects',
      value: `${counts.projects}+`,
      label: 'Projects Handled',
      subtitle: 'Successful residential, commercial & industrial field completions',
      icon: CheckCircle2,
    },
    {
      id: 'dispatch',
      value: `< ${counts.dispatch} Mins`,
      label: 'Makkuva Dispatch',
      subtitle: 'Rapid site arrival across Makkuva, Bobbili & Salur mandals',
      icon: Clock,
    },
    {
      id: 'crew',
      value: `${counts.crew}%`,
      label: 'Licensed Field Crew',
      subtitle: 'Certified master electricians, plumbers & heavy demolition staff',
      icon: Users,
    },
  ];

  return (
    <section ref={containerRef} id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 mb-3 text-xs font-mono tracking-widest text-[#FFB800] uppercase font-bold">
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white mb-3">
            Metric Credentials & <span className="text-gradient-yellow">Safety Specs</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light">
            Proven field performance combining high-voltage electrical precision with heavy structural breaking power.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className="card-rim-light bg-[#14171F] p-6 rounded-3xl border border-white/10 hover:border-[#FFB800]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">VERIFIED</span>
                  </div>

                  <div className="text-4xl font-display font-extrabold text-white group-hover:text-[#FFB800] transition-colors mb-1">
                    {metric.value}
                  </div>

                  <h3 className="text-base font-bold text-gray-100 font-display uppercase tracking-wide mb-2">
                    {metric.label}
                  </h3>
                </div>

                <p className="text-xs text-gray-400 font-light leading-relaxed pt-3 border-t border-white/5">
                  {metric.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
