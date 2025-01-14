import React from 'react';
import { motion } from 'framer-motion';

const CategoryButtons = ({ content, selectedCategory, setSelectedCategory }) => {
  return (
    <motion.div
      className="category-buttons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      {content.illustrations.categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(index)}
          className={selectedCategory === index ? 'active' : ''}
        >
          {category.name}
        </button>
      ))}
    </motion.div>
  );
};

export default CategoryButtons;

