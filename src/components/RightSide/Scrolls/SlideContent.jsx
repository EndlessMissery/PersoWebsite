import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence and motion
import "../../../styles/main.css";

const SlideContent = ({ slide }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Set content visibility to true when it is loaded
    setIsVisible(true);

    // Mark the initial load as false after a short delay
    const timer = setTimeout(() => setIsInitialLoad(false), 5000); // Adjust duration if needed

    return () => {
      clearTimeout(timer);
      setIsVisible(false);
    };
  }, [slide]);

  return (
    <AnimatePresence mode="wait">
      {slide.image && (
        <motion.img
          key={slide.image} // Use a unique key to trigger re-render and exit animation
          className="slide-image"
          src={slide.image}
          alt={slide.text || "Image description"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} // Fade-out effect
          transition={{
            duration: isInitialLoad ? 0.75 : 0, // Keep existing durations
            delay: isInitialLoad ? 0: 0, // Adjust delay only for initial load
          }}
        />
      )}
    </AnimatePresence>
  );
}

export default SlideContent;
