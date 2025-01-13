import React, { useState, useEffect } from 'react';
import '../../styles/main.css';
import data from '../../data/illustrations.json'; // Import the illustrations data
import ContentBox from './ContentBox';
import SlideContent from './Scrolls/SlideContent';
import CategoryButtons from './CategoryButtons';
import ScrollIndicator from './Scrolls/ScrollIndicator';
import DotIndicator from './DotIndicator'; // New DotIndicator component

const RightContent = ({ rightActiveTab }) => {
  const [slideIndex, setSlideIndex] = useState({
    illustrations: 0,
    appDesign: 0,
    webDesign: 0,
    bookCover: 0,
  }); // Tracking slide index for each tab
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [, setIsIllustrationsTab] = useState(false);

  const content = data;

  useEffect(() => {
    setIsIllustrationsTab(rightActiveTab === 'illustrations');

    // Reset the slide index whenever the active tab or category changes
    setSlideIndex((prevSlideIndex) => ({
      ...prevSlideIndex,
      [rightActiveTab]: 0,
    }));

    setFadeKey((prevKey) => prevKey + 1); // Change fade key to trigger the fade transition inside the box
  }, [rightActiveTab, selectedCategory]);

  // Handle vertical mouse wheel scroll for changing slides
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();

      const currentTabIndex = slideIndex[rightActiveTab]; // Get current slide index for the active tab

      if (rightActiveTab === 'illustrations' && content.illustrations.categories[selectedCategory]?.images) {
        setSlideIndex((prevIndex) => ({
          ...prevIndex,
          illustrations: event.deltaY > 0 ? Math.min(content.illustrations.categories[selectedCategory].images.length - 1, currentTabIndex + 1) : Math.max(0, currentTabIndex - 1),
        }));
      } else {
        // Handle scroll for other categories
        setSlideIndex((prevIndex) => ({
          ...prevIndex,
          [rightActiveTab]: event.deltaY > 0 ? Math.min(content[rightActiveTab]?.length - 1, currentTabIndex + 1) : Math.max(0, currentTabIndex - 1),
        }));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [rightActiveTab, selectedCategory, slideIndex]);

  const getContentBoxStyle = () => ({
    maxHeight: '80vh',
  });

  return (
    <div className="right-content">
      <div className="slider-container">
        <ContentBox style={getContentBoxStyle()}>
          <SlideContent
            fadeKey={fadeKey}
            rightActiveTab={rightActiveTab}
            content={content}
            slideIndex={slideIndex[rightActiveTab]} // Use slideIndex for the active tab
            selectedCategory={selectedCategory}
          />
        </ContentBox>

        {rightActiveTab === 'illustrations' && content.illustrations.categories.length > 0 && (
          <CategoryButtons
            content={content}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        {/* Dot Indicator for Every Tab */}
        <DotIndicator
          activeSlide={slideIndex[rightActiveTab]}
          totalSlides={content[rightActiveTab]?.length || content.illustrations.categories[selectedCategory]?.images.length}
        />

        <ScrollIndicator />
      </div>
    </div>
  );
};

export default RightContent;