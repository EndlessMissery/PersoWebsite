import React from "react";
import AboutSection from "./MainContent/AboutSection.jsx";
import ResumeSection from "./MainContent/ResumeSection.jsx";
import ContactSection from "./MainContent/ContactSection.jsx";
import TopRightText from "./Header/CornerText/TopRightText.jsx";
import BottomLeftText from "./Header/CornerText/BottomLeftText.jsx";

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
      {/* Corner text with typewriter effect */}
      <TopRightText />
      <BottomLeftText />
    </div>
  );
};

export default Content;

