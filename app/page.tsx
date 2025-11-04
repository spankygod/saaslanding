"use client";

import { useState } from 'react';
import Navbar from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { Testimonial } from "@/components/testimonial";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { PricingSection } from "@/components/pricing-section";
import { AboutUsSection } from "@/components/about-us-section";
import { MobileStatsAndTestimonials } from "@/components/mobile-stats-testimonials";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  const [currentView, setCurrentView] = useState<'home' | 'howItWorks' | 'pricing' | 'aboutUs'>('home');

  // Export function for navbar to use
  if (typeof window !== 'undefined') {
    (window as any).toggleHowItWorks = (show: boolean) => {
      setCurrentView(show ? 'howItWorks' : 'home');
    };
    
    (window as any).togglePricing = (show: boolean) => {
      setCurrentView(show ? 'pricing' : 'home');
    };
    
    (window as any).toggleAboutUs = (show: boolean) => {
      setCurrentView(show ? 'aboutUs' : 'home');
    };
  }

  const renderContent = () => {
    switch (currentView) {
      case 'howItWorks':
        return <HowItWorksSection />;
      case 'pricing':
        return <PricingSection />;
      case 'aboutUs':
        return <AboutUsSection />;
      default:
        return (
          <div className="flex items-start justify-center">
            <HeroSection />
            <StatsSection />
            <Testimonial />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="fixed inset-0 z-[-1] bg-cover bg-bottom bg-no-repeat bg-[url('/bg/bgpenguin.png')]" />
      <Navbar />

      <main className="flex-1 relative pt-8">
        {renderContent()}
      </main>

      {/* Mobile-only stats and testimonials (only show when on home view) */}
      {currentView === 'home' && (
        <div className="md:hidden">
          <MobileStatsAndTestimonials />
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
