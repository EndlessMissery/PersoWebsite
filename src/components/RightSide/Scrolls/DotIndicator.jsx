import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DotIndicator = ({ activeSlide, totalSlides }) => {
  const normalizedActiveSlide = Math.min(Math.max(activeSlide, 0), totalSlides - 1);

  return (
    <motion.div
      className="dot-indicator-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 3.5 }}
    >
      {/* Animovaný kontejner, který se roztahuje/zmenšuje podle počtu teček */}
      <motion.div
        className="dot-indicator"
        animate={{ width: `${totalSlides * 25}px` }} // Dynamická šířka
      >
        <AnimatePresence mode="popLayout">
          {Array.from({ length: totalSlides }, (_, index) => (
            <motion.div
              key={index}
              className={`dot ${index === normalizedActiveSlide ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default DotIndicator;
