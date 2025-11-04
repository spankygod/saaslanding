"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export function PricingSection() {
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
        className="w-full max-w-6xl"
      >
        <div className="bg-white/2 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="relative z-10">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h1 className="text-[24px] text-white mb-3 drop-shadow-lg" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                Choose Your Plan
              </h1>
              <p className="text-sm text-white/95 max-w-2xl mx-auto drop-shadow" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                Select perfect plan for your hiring needs. From startups to enterprises, we have solutions that scale with your growth.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
            >
              {/* Pro Plan */}
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -5 }} whileTap={{ scale: 0.98 }} className="h-full flex flex-col">
                <Card className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 hover:bg-white/25 transition-all duration-300 h-full flex flex-col">
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-lg text-white mb-2" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                      Pro
                    </CardTitle>
                    <CardDescription className="text-2xl font-bold text-white mb-3" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                      $49<span className="text-sm font-normal">/month</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <ul className="space-y-2 text-white/90 text-sm" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>5 active job posts per month</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>1 featured listing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Basic employer dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Unlimited applicant viewing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Unlimited AI resume screening & ranking</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Max Plan */}
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -8 }} whileTap={{ scale: 0.98 }} className="h-full flex flex-col">
                <Card className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 hover:bg-white/25 transition-all duration-300 h-full flex flex-col relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-violet-500 text-white text-xs px-2 py-0.5 rounded-full" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                      Popular
                    </span>
                  </div>
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-lg text-white mb-2" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                      Max
                    </CardTitle>
                    <CardDescription className="text-2xl font-bold text-white mb-3" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                      $149<span className="text-sm font-normal">/month</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <ul className="space-y-2 text-white/90 text-sm" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
   
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>10 active job posts per month</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>4 featured listing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Basic employer dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Unlimited applicant viewing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Unlimited AI resume screening & ranking</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Customer Support</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Verification Badge (contact support)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enterprise Plan */}
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -5 }} whileTap={{ scale: 0.98 }} className="h-full flex flex-col">
                <Card className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 hover:bg-white/25 transition-all duration-300 h-full flex flex-col">
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-lg text-white mb-2" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                      Enterprise
                    </CardTitle>
                    <CardDescription className="text-2xl font-bold text-white mb-3" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                      $499<span className="text-sm font-normal">/month</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <ul className="space-y-2 text-white/90 text-sm" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Unlimited active job posts per month</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>20 featured listings</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Full employer dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Unlimited applicant viewing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Unlimited AI resume screening & ranking</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Customer Support</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Verification Badge (contact support)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center mt-6">
              <p className="text-sm text-white/90 mb-4" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
                All plans include core platform features and can be cancelled anytime.
              </p>
              <Link href="https://app.waddlejob.xyz" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-block bg-gradient-to-r from-violet-500 to-violet-400 text-white hover:from-violet-600 hover:to-violet-500 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-2 text-sm cursor-pointer"
                >
                  Launch App
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
