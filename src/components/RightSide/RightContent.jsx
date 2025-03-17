import React, { useState, useEffect } from 'react';
import '../../styles/main.css';
import data from '../../data/illustrations.json';
import illustrationMap from '../../data/Illustrationmap';
import ContentBox from './ImageBox/ContentBox';
import SlideContent from './ImageBox/SlideContent';
import CategoryButtons from './ImageBox/ImageBoxButtons/CategoryButtons';
import ScrollIndicator from './ImageBox/ScrollIndicator';
import DotIndicator from './ImageBox/DotIndicator';
import { motion, AnimatePresence } from 'framer-motion';

const RightContent = ({ rightActiveTab }) => {
  const [slideIndex, setSlideIndex] = useState({
    appDesign: 0,
    webDesign: 0,
    bookCover: 0,
    visualidentities: 0,
    illustrations: 0,
  });
  const [selectedCategory, setSelectedCategory] = useState(0);

  const content = data;

  useEffect(() => {
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
  }, [rightActiveTab, selectedCategory, slideIndex, content]);
  

  const getSlideImage = (imagePath) => illustrationMap[imagePath] || imagePath;

  const getContentBoxStyle = () => ({
    maxHeight: '80vh',
  });

  const getSlideContent = () => {
    if (content[rightActiveTab]?.categories) {
      const currentSlide = content[rightActiveTab].categories[selectedCategory]?.images[slideIndex[rightActiveTab]];
      
      const isVideo = currentSlide?.endsWith('.webm');
      const isImage = currentSlide?.endsWith('.webp') || currentSlide?.endsWith('.png') || currentSlide?.endsWith('.jpg') || currentSlide?.endsWith('.svg');
  
      if (isVideo) {
        return {
          type: 'video',
          src: getSlideImage(currentSlide),
        };
      } else if (isImage) {
        return {
          type: 'image',
          src: getSlideImage(currentSlide),
        };
      }
    }
    return null;
  };

  return (
    <div className="right-content">
      <div className="slider-container">
        <ContentBox style={getContentBoxStyle()}>
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
