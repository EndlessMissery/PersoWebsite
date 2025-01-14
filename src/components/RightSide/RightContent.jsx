import React, { useState, useEffect } from 'react';
import '../../styles/main.css';
import data from '../../data/illustrations.json'; // Import the illustrations data
import illustrationMap from '../../data/Illustrationmap'; // Import the illustration map
import ContentBox from './Scrolls/ContentBox';
import SlideContent from './Scrolls/SlideContent';
import CategoryButtons from './Scrolls/CategoryButtons';
import ScrollIndicator from './Scrolls/ScrollIndicator';
import DotIndicator from './Scrolls/DotIndicator';

const RightContent = ({ rightActiveTab }) => {
  const [slideIndex, setSlideIndex] = useState({
    appDesign: 0,
    webDesign: 0,
    bookCover: 0,
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

  // Handle vertical mouse wheel scroll for changing slides
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      const currentTabIndex = slideIndex[rightActiveTab];

      if (rightActiveTab === 'illustrations' && content.illustrations.categories[selectedCategory]?.images) {
        setSlideIndex((prev) => ({
          ...prev,
          illustrations: event.deltaY > 0
            ? Math.min(content.illustrations.categories[selectedCategory].images.length - 1, currentTabIndex + 1)
            : Math.max(0, currentTabIndex - 1),
        }));
      } else {
        setSlideIndex((prev) => ({
          ...prev,
          [rightActiveTab]: event.deltaY > 0
            ? Math.min(content[rightActiveTab]?.length - 1, currentTabIndex + 1)
            : Math.max(0, currentTabIndex - 1),
        }));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [rightActiveTab, selectedCategory, slideIndex]);

  const getSlideImage = (imagePath) => {
    // Fetch the correct image from illustration map or return the image path directly
    return illustrationMap[imagePath] || imagePath;
  };

  const getContentBoxStyle = () => ({
    maxHeight: '80vh',
  });

  const getSlideContent = () => {
    if (rightActiveTab === 'illustrations') {
      return {
        image: getSlideImage(content.illustrations.categories[selectedCategory]?.images[slideIndex.illustrations]),
      };
    }
    if (rightActiveTab === 'appDesign') {
      return {
        image: content.appdesign[slideIndex.appDesign]?.image || null,
      };
    }
    if (rightActiveTab === 'webDesign') {
      return {
        image: content.webdesign[slideIndex.webDesign]?.image || null,
      };
    }
    if (rightActiveTab === 'bookCover') {
      return {
        image: content.bookcovers[slideIndex.bookCover]?.image || null,
      };
    }
    return null; // In case of invalid tab
  };

  return (
    <div className="right-content">
      <div className="slider-container">
        <ContentBox style={getContentBoxStyle()}>
          {/* Render the correct content based on active tab */}
          <SlideContent slide={getSlideContent()} />
        </ContentBox>

        {/* Show category buttons only if in Illustrations Tab */}
        {rightActiveTab === 'illustrations' && content.illustrations.categories.length > 0 && (
          <CategoryButtons
            content={content}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        <DotIndicator
          activeSlide={slideIndex[rightActiveTab]}
          totalSlides={
            rightActiveTab === 'illustrations'
              ? content.illustrations.categories[selectedCategory]?.images.length
              : content[rightActiveTab]?.length || 0
          }
        />

        <ScrollIndicator />
      </div>
    </div>
  );
};

export default RightContent;
