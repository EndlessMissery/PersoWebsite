import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';  // Ensure this import is present
import FadeTransition from './FadeTransition'; // Import the FadeTransition component
import webDesignMap from '../../../data/webDesignMap';

const WebDesign = ({ content, slideIndex }) => {
  if (!content || !content.webDesign) {
    return <p>No web designs available.</p>;
  }

  const imageFile = content.webDesign[slideIndex];
  const isUrl = imageFile && (imageFile.startsWith('http') || imageFile.startsWith('https'));
  const imageSrc = isUrl ? imageFile : webDesignMap[imageFile];

  const fadeKey = `webDesign-${slideIndex}`;

  return (
    <FadeTransition keyId={fadeKey}>
      {imageSrc && (
        <motion.img
          src={imageSrc}
          alt={`Web Design ${slideIndex + 1}`}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
    </FadeTransition>
  );
};

export default WebDesign;

