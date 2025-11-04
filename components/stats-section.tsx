import { motion } from "framer-motion";

export function StatsSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hidden md:block absolute right-42 top-2/4 transform -translate-y-1/2 z-10 space-y-10"
    >
      <motion.div variants={itemVariants} className="text-white">
        <div style={{ fontSize: '28px' }}>10,000+</div>
        <div style={{ fontSize: '14px' }}>professionals exploring new roles weekly</div>
      </motion.div>
      <motion.div variants={itemVariants} className="text-white">
        <div style={{ fontSize: '28px' }}>300+</div>
        <div style={{ fontSize: '14px' }}>startups hiring talent</div>
      </motion.div>
      <motion.div variants={itemVariants} className="text-white">
        <div style={{ fontSize: '28px' }}>92%</div>
        <div style={{ fontSize: '14px' }}>report an easier job-search experience</div>
      </motion.div>
    </motion.div>
  );
}
