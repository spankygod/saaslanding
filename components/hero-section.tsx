import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export function HeroSection() {
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
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="bg-transparent border-0 shadow-none max-w-4xl mx-auto mt-4 px-4 sm:px-6 lg:px-8">
        <CardContent className="p-0 text-center">
          <motion.div 
            variants={itemVariants}
            className="uppercase tracking-widest text-white/75 mb-3 text-xs sm:text-sm"
          >
            The space between skills and opportunity
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="leading-tight mb-4 text-white" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Where the right job finds you.</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-white/88 max-w-prose mx-auto mb-6 text-center text-sm sm:text-base md:text-lg"
          >
            A career platform built for creators, developers, and dreamers.<br className="hidden sm:block" />
            Discover roles that match your talent, your pace, and your future.<br className="hidden sm:block" />
            Explore opportunities without the noise.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4 mt-5"
          >
            <Link href="https://app.waddlejob.xyz" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-gradient-to-r from-violet-500 to-violet-400 text-white hover:from-violet-600 hover:to-violet-500 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3 text-sm sm:text-base">
                  Launch App
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
