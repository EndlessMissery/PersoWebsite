import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FadeTransition = ({ children, keyId }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyId} // Unique key for each transition
        initial={{ opacity: 0 }} // Initial opacity for fade-in
        animate={{ opacity: 1 }} // Animate to full opacity
        exit={{ opacity: 0 }} // Fade out when leaving
        transition={{ duration: 0.8 }} // Fade duration
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeTransition;
