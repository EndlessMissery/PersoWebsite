import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MobileRightHeader = ({ rightActiveTab, setrightActiveTab }) => {
  const tabLabels = {
    bookcovers: "Cover",
    appdesign: "App Design",
    webdesign: "Web Design",
    visualidentities: "Identity",
    illustrations: "Mix Art"
  };

  const [activeTabIndex, setActiveTabIndex] = useState(0); // Track the active tab index
  const controls = useAnimation();
  const sliderRef = useRef(null);

  // Update slider position when the active tab changes
  useEffect(() => {
    const activeButton = document.querySelector(".right-tab.active");
    if (activeButton && sliderRef.current) {
      const offsetLeft = activeButton.offsetLeft;
      controls.start({ x: offsetLeft, transition: { duration: 0.25, ease: "easeInOut" } });
    }
  }, [rightActiveTab, controls]);

  const tabKeys = Object.keys(tabLabels); // Get the tab keys from the tabLabels object

  // Handle tab change with arrows
  const handleNextTab = () => {
    setActiveTabIndex((prevIndex) => (prevIndex + 1) % tabKeys.length);
    setrightActiveTab(tabKeys[(activeTabIndex + 1) % tabKeys.length]);
  };

  const handlePrevTab = () => {
    setActiveTabIndex((prevIndex) => (prevIndex - 1 + tabKeys.length) % tabKeys.length);
    setrightActiveTab(tabKeys[(activeTabIndex - 1 + tabKeys.length) % tabKeys.length]);
  };

  return (
    <motion.div
      className="mobile-right-side"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 2.5 }}
    >
      <button className="arrow-button arrow-left" onClick={handlePrevTab}>
        <FaChevronLeft />
      </button>

      <motion.div className="mobile-right-side-slider" ref={sliderRef} animate={controls}></motion.div>

      <div className="mobile-tabs">
        <button
          className={`right-side-tab ${
            rightActiveTab === tabKeys[activeTabIndex] ? "active" : ""
          }`}
        >
          {tabLabels[tabKeys[activeTabIndex]]}
        </button>
      </div>

      <button className="arrow-button arrow-right" onClick={handleNextTab}>
        <FaChevronRight />
      </button>
    </motion.div>
  );
};

export default MobileRightHeader;
