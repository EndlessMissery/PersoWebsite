import React from 'react';
import { motion } from 'framer-motion';

const ContentBox = ({ children }) => {
  return (
    <motion.div
      className="right-content-box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 3 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.5 }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ContentBox;

