import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import HeroSection from './components/HeroSection';
import MetricsSection from './components/MetricsSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import Testimonials from './components/Testimonials';
import ContactQuotation from './components/ContactQuotation';
import Footer from './components/Footer';

export default function App() {
  const [activeSector, setActiveSector] = useState('all');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0C10] text-gray-100 relative overflow-x-hidden selection:bg-[#FFB800] selection:text-black">
      {/* Clean Ambient Particle Layer */}
      <HeroCanvas />

      {/* Floating Navbar */}
      <Navbar activeSector={activeSector} setActiveSector={setActiveSector} />

      {/* Hero Section Overlay */}
      <HeroSection activeSector={activeSector} setActiveSector={setActiveSector} />

      {/* Why Us - Animated GSAP Counter Metrics */}
      <MetricsSection />

      {/* 4-Step Process Section ("How We Work") */}
      <ProcessSection />

      {/* What We Are Servicing Section */}
      <ServicesSection activeSector={activeSector} />

      {/* Projects Showcase & Before/After Slider */}
      <ProjectsShowcase />

      {/* Localized Verified Customer Reviews Marquee */}
      <Testimonials />

      {/* Inspection Quotation Form & Contact Chips */}
      <ContactQuotation />

      {/* Footer */}
      <Footer />
    </div>
  );
}
