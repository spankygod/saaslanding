"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutUsSection() {
  return (
    <div className="flex justify-center p-2">
      <div className="bg-white/2 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 relative overflow-hidden w-full max-w-4xl">
      <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-[22px] text-white mb-4 drop-shadow-lg" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                About WaddleJob
              </h1>
              <div className="text-left space-y-3">
                <p className="text-sm text-white/95 leading-relaxed drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                  <span className="font-semibold text-white">WaddleJob was born from a simple truth:</span><br/>
                  In Web3, talent is everywhere — but opportunity is not.
                </p>
                
                <p className="text-sm text-white/95 leading-relaxed drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                  Developers, designers, community managers, marketers, founders… brilliant people are building in every corner of world. Yet many don't get discovered. Too many teams struggle to hire. Too many projects collapse not because they lack vision, but because they lack the right people to build it.
                </p>
                
                <p className="text-sm text-white/95 leading-relaxed drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                  <span className="font-semibold text-white">We felt that pain ourselves.</span><br/>
                  As builders in the Web3 space, we watched friends and teammates jump between DAOs, Discords, and Telegrams just to find work. No structure. No visibility. No way to prove skills beyond a username or wallet address. And companies spent weeks sorting applicants, filtering noise, and trusting resumes over real capability.
                </p>
                
                <p className="text-sm text-white/95 leading-relaxed drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                  <span className="font-semibold text-white">So we built WaddleJob.</span><br/>
                  A job board designed for the new internet — where your work matters more than where you're from, where talent is visible, and where opportunity meets skill, not chance.
                </p>
              </div>
            </div>
            
            <div className="mb-8 text-left space-y-4">
              <p className="text-sm text-white/95 leading-relaxed drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                With <span className="font-semibold text-white">AI-enhanced screening</span>, WaddleJob helps teams find the right people faster. We're not here to replace humans with AI — we're here to remove the barriers holding them back.
              </p>
              
              <p className="text-sm text-white/95 leading-relaxed drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                With <span className="font-semibold text-white">free access for job seekers</span>, no one is left behind. Everyone deserves the chance to be discovered and find meaningful work in the Web3 space.
              </p>
              
              <p className="text-sm text-white/95 leading-relaxed drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                With <span className="font-semibold text-white">Web3-native identity</span>, provable experience, and merit-based scoring, hiring becomes fair. Your on-chain work and contributions speak louder than traditional resumes.
              </p>
              
              <p className="text-sm text-white/95 leading-relaxed drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                We're built by the community, for the community: the <span className="font-semibold text-white">builders, the dreamers, the remote nomads, the coffee-shop coders, the degen thinkers, and the quiet geniuses</span> who stay out of the spotlight.
              </p>
            </div>
            

          </div>
      </div>
    </div>
  );
}
