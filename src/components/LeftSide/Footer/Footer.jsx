import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Footer = ({ activeTab, setActiveTab }) => {
  // Map tab keys to display text
  const tabLabels = {
    about: "About Me",
    resume: "Resume",
    contact: "Contact Me",
  };

  const controls = useAnimation();
  const sliderRef = useRef(null);

  useEffect(() => {
    const activeButton = document.querySelector(".tab.active");
    if (activeButton && sliderRef.current) {
      const offsetLeft = activeButton.offsetLeft;
      controls.start({ x: offsetLeft, transition: { duration: 0.25, ease: "easeInOut" } });
    }
  }, [activeTab, controls]);

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.5 }}
    >
      <motion.div className="footer-slider" ref={sliderRef} animate={controls}></motion.div>
      {Object.keys(tabLabels).map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "tab active" : "tab"}
          onClick={() => setActiveTab(tab)}
        >
          {tabLabels[tab]}
        </button>
      ))}
    </motion.footer>
  );
};

export default Footer;
