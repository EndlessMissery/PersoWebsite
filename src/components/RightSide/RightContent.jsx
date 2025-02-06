import React, { useState, useEffect } from 'react';
import '../../styles/main.css';
import data from '../../data/illustrations.json'; // Import the illustrations data
import illustrationMap from '../../data/Illustrationmap'; // Import the illustration map
import ContentBox from './Scrolls/ContentBox';
import SlideContent from './Scrolls/SlideContent';
import CategoryButtons from './Scrolls/CategoryButtons';
import ScrollIndicator from './Scrolls/ScrollIndicator';
import DotIndicator from './Scrolls/DotIndicator';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

const RightContent = ({ rightActiveTab }) => {
  const [slideIndex, setSlideIndex] = useState({
    bookCover: 0,
    appDesign: 0,
    webDesign: 0,
    visualidentities: 0,
    illustrations: 0,
  });
  const [selectedCategory, setSelectedCategory] = useState(0);

  const content = data;

  useEffect(() => {
    // Reset slide index on tab change
    setSlideIndex((prev) => ({
      ...prev,
      [rightActiveTab]: 0,
    }));
  }, [rightActiveTab, selectedCategory]);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      const currentTabIndex = slideIndex[rightActiveTab];

      if (content[rightActiveTab]?.categories?.[selectedCategory]?.images) {
        setSlideIndex((prev) => ({
          ...prev,
          [rightActiveTab]: event.deltaY > 0
            ? Math.min(content[rightActiveTab].categories[selectedCategory].images.length - 1, currentTabIndex + 1)
            : Math.max(0, currentTabIndex - 1),
        }));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [rightActiveTab, selectedCategory, slideIndex]);

  const getSlideImage = (imagePath) => illustrationMap[imagePath] || imagePath;

  const getContentBoxStyle = () => ({
    maxHeight: '80vh',
  });

  const getSlideContent = () => {
    if (content[rightActiveTab]?.categories) {
      return {
        image: getSlideImage(content[rightActiveTab].categories[selectedCategory]?.images[slideIndex[rightActiveTab]]),
      };
    }
    return null; // In case of invalid tab
  };

  return (
    <div className="right-content">
      <div className="slider-container">
        <ContentBox style={getContentBoxStyle()}>
          {/* Wrap the box content with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${rightActiveTab}-${selectedCategory}-${slideIndex[rightActiveTab]}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .75, delay: 0 }}
            >
              <SlideContent slide={getSlideContent()} />
            </motion.div>
          </AnimatePresence>
        </ContentBox>

        {content[rightActiveTab]?.categories?.length > 0 && (
          <CategoryButtons
            content={content}
            rightActiveTab={rightActiveTab}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        <DotIndicator
          activeSlide={slideIndex[rightActiveTab]}
          totalSlides={content[rightActiveTab]?.categories?.[selectedCategory]?.images?.length || 0}
        />

        <ScrollIndicator />
      </div>
    </div>
  );
};

export default RightContent;
