"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Navbar() {
  return (
    <Card className="w-full bg-transparent border-0 shadow-none">
      <CardContent className="px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center relative">
          <div className="absolute left-0 flex items-center">
            <h1 className="text-xl font-light text-white/90 ml-20">
              WaddleJob
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              style={{ fontSize: '16px', fontWeight: '400' }}
            >
              Browse Jobs
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              style={{ fontSize: '16px', fontWeight: '400' }}
            >
              How it Works
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              style={{ fontSize: '16px', fontWeight: '400' }}
            >
              For Employers
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              style={{ fontSize: '16px', fontWeight: '400' }}
            >
              Pricing
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              style={{ fontSize: '16px', fontWeight: '400' }}
            >
              About Us
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
