import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TextContent = ({ rightActiveTab, content, slideIndex }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <AnimatePresence mode="wait">
        {rightActiveTab !== 'illustrations' && (
          <motion.p
            key={`${rightActiveTab}-${slideIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
          >
            {content[rightActiveTab]?.[slideIndex]?.text || 'No content available'}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TextContent;

