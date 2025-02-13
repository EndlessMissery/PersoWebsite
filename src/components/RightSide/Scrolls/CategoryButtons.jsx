import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CaseStudyButton from './CaseStudyButton';  // Import the new CaseStudyButton component

const CategoryButtons = ({ content, rightActiveTab, selectedCategory, setSelectedCategory }) => {
  const { t } = useTranslation();
  const categories = content[rightActiveTab]?.categories || [];
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setSelectedCategory(0);
  }, [rightActiveTab, setSelectedCategory]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsInitialLoad(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  const isAppOrWebDesignTab = rightActiveTab === 'appdesign' || rightActiveTab === 'webdesign';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={rightActiveTab}
        className="category-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, delay: isInitialLoad ? 0 : 0 }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={selectedCategory === index ? 'active' : ''}
          >
            {t(category.name)} {/* Translate category name */}
          </button>
        ))}

        {/* Only show the "Open Case Study" button for App Design and Web Design tabs */}
        {isAppOrWebDesignTab && (
          <CaseStudyButton categoryName={selectedCategory + 1} rightActiveTab={rightActiveTab} />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default CategoryButtons;
