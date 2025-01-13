import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all illustrations statically
import Illustration1 from '../../assets/Illustrations/Illustration_1.png';
import Illustration2 from '../../assets/Illustrations/Illustration_2.png';
import Illustration3 from '../../assets/Illustrations/Illustration_3.png';
import Illustration4 from '../../assets/Illustrations/Illustration_4.png';

const illustrationMap = {
  'src/assets/Illustrations/Illustration_1.png': Illustration1,
  'src/assets/Illustrations/Illustration_2.png': Illustration2,
  'src/assets/Illustrations/Illustration_3.png': Illustration3,
  'src/assets/Illustrations/Illustration_4.png': Illustration4,
};

const ImageContent = ({ rightActiveTab, content, slideIndex, selectedCategory }) => {
  const imageFile = content.illustrations.categories[selectedCategory]?.images[slideIndex];
  const isUrl = imageFile && (imageFile.startsWith('http') || imageFile.startsWith('https'));
  const imageSrc = isUrl ? imageFile : illustrationMap[imageFile];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <AnimatePresence mode="wait">
        {rightActiveTab === 'illustrations' && imageSrc && (
          <motion.div
            key={`${rightActiveTab}-${selectedCategory}-${slideIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          >
            <motion.img
              src={imageSrc}
              alt={`Illustration ${slideIndex + 1}`}
              style={{ width: '100%', height: 'auto' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageContent;

