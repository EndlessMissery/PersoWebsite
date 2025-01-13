import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      className="scroll-tutorial"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 7.5 }}
    >
      <div className="scroll-icon">
        <motion.div
          animate={{ y: ['0%', '-20%', '0%'] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '36px', color: 'rgba(6,6,6,0.25)' }}
        >
          <span role="img" aria-label="scroll">🖱️</span>
        </motion.div>
        <p>Scroll to navigate</p>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;

