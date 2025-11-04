import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function MobileStatsAndTestimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0
      }
    }
  };

  const statItemVariants = {
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

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="lg:hidden mt-12 px-4 sm:px-6 lg:px-8 space-y-8"
    >
      {/* Stats Section for Mobile */}
      <motion.div variants={statItemVariants}>
        <Card className="bg-gradient-to-b from-black/40 to-black/30 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-white text-lg font-semibold mb-6 text-center">Our Impact</h3>
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <motion.div variants={statItemVariants} className="text-center">
                <div className="text-white text-2xl sm:text-3xl font-bold mb-2">10,000+</div>
                <div className="text-white/80 text-sm">professionals exploring new roles weekly</div>
              </motion.div>
              <motion.div variants={statItemVariants} className="text-center">
                <div className="text-white text-2xl sm:text-3xl font-bold mb-2">300+</div>
                <div className="text-white/80 text-sm">startups hiring talent</div>
              </motion.div>
              <motion.div variants={statItemVariants} className="text-center">
                <div className="text-white text-2xl sm:text-3xl font-bold mb-2">92%</div>
                <div className="text-white/80 text-sm">report an easier job-search experience</div>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Testimonial Section for Mobile */}
      <motion.div variants={testimonialVariants} whileHover={{ scale: 1.02 }}>
        <Card className="bg-gradient-to-b from-black/40 to-black/30 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="text-white text-base sm:text-lg text-center italic">
              "We hired our first backend engineer in under 48 hours. The talent here is skilled, responsive, and passionate."
            </div>
            <div className="mt-4 text-white/90 text-sm sm:text-base text-center">— Hiring Manager</div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
