"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export function HowItWorksSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl"
      >
        <div className="bg-white/2 backdrop-blur-sm border border-white/5 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h1 className="text-[28px] text-white mb-4 drop-shadow-lg" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                How WaddleJob Works
              </h1>
              <p className="text-base text-white/95 max-w-2xl mx-auto drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                Your journey to finding the perfect job opportunity in just 4 simple steps
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 hover:bg-white/35 transition-all duration-300">
                <div className="border-l-4 border-violet-400 pl-4">
                  <h3 className="text-base text-white mb-3 drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                    1. Create Your Profile
                  </h3>
                  <p className="text-base text-white/95 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                    Sign up and build your professional profile showcasing your skills, experience, and what you're looking for in your next opportunity.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 hover:bg-white/35 transition-all duration-300">
                <div className="border-l-4 border-violet-400 pl-4">
                  <h3 className="text-base text-white mb-3 drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                    2. Get Matched
                  </h3>
                  <p className="text-base text-white/95 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                    Our smart algorithm connects you with opportunities that match your skills, preferences, and career goals. No more endless scrolling through irrelevant listings.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 hover:bg-white/35 transition-all duration-300">
                <div className="border-l-4 border-violet-400 pl-4">
                  <h3 className="text-base text-white mb-3 drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                    3. Connect Directly
                  </h3>
                  <p className="text-base text-white/95 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                    Engage directly with hiring managers and teams. Skip recruiters and talk to people who actually make decisions.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-6 hover:bg-white/35 transition-all duration-300">
                <div className="border-l-4 border-violet-400 pl-4">
                  <h3 className="text-base text-white mb-3 drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                    4. Land Your Dream Role
                  </h3>
                  <p className="text-base text-white/95 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                    Find perfect opportunity that aligns with your talents and career aspirations. Join thousands who've already found their ideal match.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="text-center">
              <p className="text-base text-white/95 mb-6 drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                Ready to get started?
              </p>
              <Link href="https://app.waddlejob.xyz" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button className="bg-gradient-to-r from-violet-500 to-violet-400 text-white hover:from-violet-600 hover:to-violet-500 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3 text-base">
                    Launch App
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
