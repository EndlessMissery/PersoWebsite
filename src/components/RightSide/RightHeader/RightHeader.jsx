import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const RightHeader = ({ rightActiveTab, setrightActiveTab }) => {
  // Map tab keys to display text
  const tabLabels = {
    appdesign: "App Design",
    webdesign: "Web Design",
    visualidentities: "Identity",
    bookcovers: "Cover",
    illustrations: "Mix Art"
  };

  const controls = useAnimation();
  const sliderRef = useRef(null);

  useEffect(() => {
    const activeButton = document.querySelector(".right-tab.active");
    if (activeButton && sliderRef.current) {
      const offsetLeft = activeButton.offsetLeft;
      controls.start({ x: offsetLeft, transition: { duration: 0.25, ease: "easeInOut" } });
    }
  }, [rightActiveTab, controls]);

  return (
    <motion.footer
      className="right-side"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 2.5 }}
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

