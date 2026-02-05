import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  parallaxOffset?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id, parallaxOffset = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxOffset]);

  return (
    <section id={id} ref={ref} className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.95 }} // Reverse animation on exit
        viewport={{ once: false, amount: 0.2 }} // Re-triggers animation when scrolling back
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;