import React from 'react';
import { motion } from 'framer-motion';

const DotIndicator = ({ activeSlide, totalSlides }) => {
  // Generate 10 dots, so the totalDots array will have exactly 10 items
  const totalDots = 10;

  // Ensure the activeSlide is within the range of totalDots (0 to 9)
  const normalizedActiveSlide = Math.min(Math.max(activeSlide, 0), totalDots - 1);

  return (
    <motion.div
      className="dot-indicator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.5, // Smooth fade-in/out transition
        delay: 3.5    // Delay before the effect starts
      }}
    >
      {Array.from({ length: totalDots }, (_, index) => (
        <motion.div
          key={index}
          className={`dot ${index === normalizedActiveSlide ? 'active' : ''}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: index === normalizedActiveSlide ? 1 : 0.3, // Fade active dot in, others out
            scale: index === normalizedActiveSlide ? 1 : 1,  // Slightly scale up the active dot
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            opacity: { duration: 0.75 },
            scale: { duration: 0.75, ease: "easeInOut" },
          }}
        />
      ))}
    </motion.div>
  );
};

export default DotIndicator;

