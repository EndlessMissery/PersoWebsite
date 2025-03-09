import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../styles/main.css";

const SlideContent = ({ slide }) => {
  const [, setIsVisible] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => setIsInitialLoad(false), 5000);

    return () => {
      clearTimeout(timer);
      setIsVisible(false);
    };
  }, [slide]);

  return (
    <AnimatePresence mode="wait">
      {slide?.type === "video" ? (
        <motion.video
          key={slide.src}
          className="slide-video"
          src={slide.src}
          controls
          autoPlay
          loop
          muted
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: isInitialLoad ? 0.75 : 0,
            delay: isInitialLoad ? 0 : 0,
          }}
        />
      ) : slide?.type === "image" && slide?.src ? (
        <motion.img
          key={slide.src}
          className="slide-image"
          src={slide.src}
          alt={slide.text || "Image description"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: isInitialLoad ? 0.75 : 0,
            delay: isInitialLoad ? 0 : 0,
          }}
        />
      ) : null}
    </AnimatePresence>
  );
};

export default SlideContent;
