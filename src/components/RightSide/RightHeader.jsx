import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const RightHeader = ({ rightActiveTab, setrightActiveTab }) => {
  // Map tab keys to display text
  const tabLabels = {
    appdesign: "App Design",
    webdesign: "Web Design",
    bookcovers: "Book Cover",
    illustrations: "Illustration"
  };

  const controls = useAnimation();
  const sliderRef = useRef(null);

  useEffect(() => {
    const activeButton = document.querySelector(".right-tab.active");
    if (activeButton && sliderRef.current) {
      const offsetLeft = activeButton.offsetLeft;
      controls.start({ x: offsetLeft, transition: { duration: 0.025, ease: "easeInOut" } });
    }
  }, [rightActiveTab, controls]);

  return (
    <motion.footer
      className="right-side"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, delay: 4 }}
    >
      <motion.div className="right-side-slider" ref={sliderRef} animate={controls}></motion.div>
      {Object.keys(tabLabels).map((righttab) => (
        <button
          key={righttab}
          className={rightActiveTab === righttab ? "right-tab active" : "right-side-tab"}
          onClick={() => setrightActiveTab(righttab)}
        >
          {tabLabels[righttab]}
        </button>
      ))}
    </motion.footer>
  );
};

export default RightHeader;

