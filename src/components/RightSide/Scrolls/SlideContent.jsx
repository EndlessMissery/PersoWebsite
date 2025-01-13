// Main Component
import React from 'react';
import Illustration from './Illustration';
import AppDesign from './AppDesign';
import WebDesign from './WebDesign';
import BookCover from './BookCover';

const SlideContent = ({ rightActiveTab, content, slideIndex, selectedCategory }) => {
  switch (rightActiveTab) {
    case 'illustrations':
      return <Illustration content={content} slideIndex={slideIndex} selectedCategory={selectedCategory} />;
    case 'appDesign':
      return <AppDesign content={content} slideIndex={slideIndex} />;
    case 'webDesign':
      return <WebDesign content={content} slideIndex={slideIndex} />;
    case 'bookCover':
      return <BookCover content={content} slideIndex={slideIndex} />;
    default:
      return <div>No content available</div>;
  }
};

export default SlideContent;

