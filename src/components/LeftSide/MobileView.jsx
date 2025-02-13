import React, { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import useControlledTypewriter from "../../hooks/useControlledTypewriter";
import { FaUser, FaFileAlt, FaEnvelope, FaChevronDown } from "react-icons/fa";
import AboutSection from "./MainContent/AboutSection";
import ResumeSection from "./MainContent/ResumeSection";
import ContactSection from "./MainContent/ContactSection";
import MobileRightHeader from "../RightSide/RightHeader/MobileRightHeader"; // Import RightHeader
import { motion } from "framer-motion"; // Import motion from framer-motion

const MobileView = () => {
  const [activeTab, setActiveTab] = useState("about"); // Set default to "about"
  const [rightActiveTab, setRightActiveTab] = useState("bookcovers"); // Default active tab for RightHeader
  const isMobile = useScreenSize();

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "resume":
        return <ResumeSection />;
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const typewriterText = useControlledTypewriter(["Hello!", "Welcome!", "Explore my portfolio!"]);

  return (
    <motion.div
      className="mobile-view"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Fade to opacity 1
      transition={{ duration: 1.5, delay: 0.5 }} // Animation duration of 1 second
    >
      <div className="mobile-header">
        {!isMobile && <div className="typewriter">{typewriterText}</div>}
      </div>

      

      {/* RightHeader Component */}
      <MobileRightHeader 
        rightActiveTab={rightActiveTab} 
        setrightActiveTab={setRightActiveTab} 
      />

      <div className={`mobile-content ${activeTab ? "active" : ""}`}>
        {renderContent()}

        {/* Down Arrow Button for Hiding Content */}
        {activeTab && (
          <button className="close-tab-button" onClick={() => setActiveTab(null)}>
            <FaChevronDown />
          </button>
        )}
      </div>

      <div className="mobile-footer">
        <button onClick={() => handleTabClick("about")} className={activeTab === "about" ? "active" : ""}>
          <FaUser />
        </button>
        <button onClick={() => handleTabClick("resume")} className={activeTab === "resume" ? "active" : ""}>
          <FaFileAlt />
        </button>
        <button onClick={() => handleTabClick("contact")} className={activeTab === "contact" ? "active" : ""}>
          <FaEnvelope />
        </button>
      </div>
    </motion.div>
  );
};

export default MobileView;
