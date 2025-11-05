"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHowItWorks = () => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Toggle How it Works view using global function
    if (typeof window !== 'undefined' && (window as any).toggleHowItWorks) {
      (window as any).toggleHowItWorks(true);
    }
  };

  const togglePricing = () => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Toggle Pricing view using global function
    if (typeof window !== 'undefined' && (window as any).togglePricing) {
      (window as any).togglePricing(true);
    }
  };

  const toggleAboutUs = () => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Toggle About Us view using global function
    if (typeof window !== 'undefined' && (window as any).toggleAboutUs) {
      (window as any).toggleAboutUs(true);
    }
  };

  const showHome = () => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Show home view using global function
    if (typeof window !== 'undefined' && (window as any).toggleHowItWorks) {
      (window as any).toggleHowItWorks(false);
    }
    if (typeof window !== 'undefined' && (window as any).togglePricing) {
      (window as any).togglePricing(false);
    }
    if (typeof window !== 'undefined' && (window as any).toggleAboutUs) {
      (window as any).toggleAboutUs(false);
    }
  };

  return (
    <Card className="w-full bg-transparent border-0 shadow-none">
      <CardContent className="px-4 sm:px-6 lg:px-8 py-2">
        {/* Desktop Layout - Original positioning */}
        <div className="hidden md:flex items-center justify-center relative">
          <div className="absolute left-0 flex items-center">
            <div className="flex items-center ml-20 cursor-pointer hover:opacity-80 transition-opacity duration-300" onClick={showHome}>
              <img 
                src="/logo-white.svg" 
                alt="WaddleJob" 
                className="h-12 w-auto mr-3"
              />
              <h1 className="text-xl font-light text-white/90 hover:text-white transition-colors duration-300">
                WaddleJob
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              style={{ fontSize: '16px', fontWeight: '400' }}
              onClick={showHome}
            >
              Home
            </Button>
            <a 
              href="https://www.app.waddlejob.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '16px', fontWeight: '400' }}
            >
              Browse Jobs
            </a>
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              style={{ fontSize: '16px', fontWeight: '400' }}
              onClick={toggleHowItWorks}
            >
              How it Works
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              style={{ fontSize: '16px', fontWeight: '400' }}
              onClick={togglePricing}
            >
              Pricing
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              style={{ fontSize: '16px', fontWeight: '400' }}
              onClick={toggleAboutUs}
            >
              About Us
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300" onClick={showHome}>
                <img 
                  src="/logo-white.svg" 
                  alt="WaddleJob" 
                  className="h-10 w-auto mr-2"
                />
                <h1 className="text-lg font-light text-white/90 hover:text-white transition-colors duration-300">
                  WaddleJob
                </h1>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-4 space-y-2">
              <Button 
                variant="ghost" 
                className="w-full text-left justify-start text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm cursor-pointer"
                onClick={showHome}
              >
                Home
              </Button>
              <a 
                href="https://www.app.waddlejob.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-left justify-start text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 p-3 rounded-md text-sm font-medium block"
              >
                Browse Jobs
              </a>
              <Button 
                variant="ghost" 
                className="w-full text-left justify-start text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm cursor-pointer"
                onClick={toggleHowItWorks}
              >
                How it Works
              </Button>
              <Button 
                variant="ghost" 
                className="w-full text-left justify-start text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm cursor-pointer"
                onClick={togglePricing}
              >
                Pricing
              </Button>
              <Button 
                variant="ghost" 
                className="w-full text-left justify-start text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm cursor-pointer"
                onClick={toggleAboutUs}
              >
                About Us
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
