import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CategoryButtons = ({ content, rightActiveTab, selectedCategory, setSelectedCategory }) => {
  const categories = content[rightActiveTab]?.categories || [];
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isVisible, setIsVisible] = useState(false); // State to control visibility after the delay

  useEffect(() => {
    // Delay visibility by 7 seconds on refresh
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsInitialLoad(false); // Mark as no longer initial load after the delay
    }, 8500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!isVisible) {
    return null; // Do not render the buttons until the delay has passed
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={rightActiveTab}
        className="category-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: isInitialLoad ? .75 : .75, // Longer duration for initial load
          delay: isInitialLoad ? 0 : 0, // Delay only for the initial load
        }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={selectedCategory === index ? 'active' : ''}
          >
            {category.name}
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default CategoryButtons;
