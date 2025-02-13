import React, { useState, useEffect } from "react";
import AboutSection from "./MainContent/AboutSection.jsx";
import ResumeSection from "./MainContent/ResumeSection.jsx";
import ContactSection from "./MainContent/ContactSection.jsx";
import TopRightText from "./Header/CornerText/TopRightText.jsx";
import BottomLeftText from "./Header/CornerText/BottomLeftText.jsx";
import MobileView from "./MobileView.jsx"; // Create a separate component for mobile version

const Content = ({ activeTab }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update the screen size check on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <MobileView />; // Render mobile version
  }

  // Tabs object containing JSX for each tab
  const tabs = {
    about: <AboutSection />,
    resume: <ResumeSection />,
    contact: <ContactSection />,
  };

  return (
    <div className="content">
      {/* Render the active tab */}
      <div className={`content-box ${activeTab}`}>
        {tabs[activeTab]}
      </div>
      {/* Corner text with typewriter effect */}
      <TopRightText />
      <BottomLeftText />
    </div>
  );
};

export default Content;
