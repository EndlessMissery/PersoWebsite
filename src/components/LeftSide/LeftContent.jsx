import React from "react";
import { motion } from "framer-motion";
import AboutSection from "./MainContent/AboutSection.jsx";
import ResumeSection from "./MainContent/ResumeSection.jsx";
import ContactSection from "./MainContent/ContactSection.jsx";
import TopRightText from "./CornerText/TopRightText.jsx";
import BottomLeftText from "./CornerText/BottomLeftText.jsx";

const Content = ({ activeTab }) => {
  // Tabs object containing JSX for each tab
  const tabs = {
    about: <AboutSection />,
    resume: <ResumeSection />,
    contact: <ContactSection />,
  };

  return (
    <div className="content">
      {/* Render the active tab */}
      <div className="content-box">
        {tabs[activeTab]}
      </div>

      {/* Vertical text on left side */}
      <motion.div
        className="vertical-text left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 2 }}
      >
      </motion.div>

      {/* Vertical text on right side */}
      <motion.div
        className="vertical-text right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 2 }}
      >
      </motion.div>

      {/* Corner text with typewriter effect */}
      <TopRightText />
      <BottomLeftText />
    </div>
  );
};

export default Content;

