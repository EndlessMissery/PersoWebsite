import React from 'react';
import { motion } from 'framer-motion';

const ContentBox = ({ children, style }) => {
  return (
    <motion.div
      className="right-content-box"
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 3 }}
    >
      {/* Text inside the box with a 2-second delay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.5 }}  // Additional 2-second delay
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ContentBox;

