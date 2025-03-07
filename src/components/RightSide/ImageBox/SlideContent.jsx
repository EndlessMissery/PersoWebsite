import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../styles/main.css";

const SlideContent = ({ slide }) => {
  const [, setIsVisible] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Visibility true when it is loaded
    setIsVisible(true);

    // Delay
    const timer = setTimeout(() => setIsInitialLoad(false), 5000); 

    return () => {
      clearTimeout(timer);
      setIsVisible(false);
    };
  }, [slide]);

  return (
    <AnimatePresence mode="wait">
      {slide.image && (
        <motion.img
          key={slide.image}
          className="slide-image"
          src={slide.image}
          alt={slide.text || "Image description"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: isInitialLoad ? 0.75 : 0,
            delay: isInitialLoad ? 0: 0,
          }}
        />
      )}
    </AnimatePresence>
  );
}

export default SlideContent;
