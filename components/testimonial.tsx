import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Testimonial() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      layout={false}
      className="hidden md:block absolute left-32 bottom-20"
    >
      <Card className="bg-gradient-to-b from-black/60 to-black/50 backdrop-blur-md border-0 text-white p-5 max-w-90 shadow-2xl">
        <CardContent className="p-0">
          <div className="text-white">
            "We hired our first backend engineer in under 48 hours. The talent here is skilled, responsive, and passionate."
          </div>
          <div className="mt-2 text-white/90 text-xs text-right">— Hiring Manager</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
