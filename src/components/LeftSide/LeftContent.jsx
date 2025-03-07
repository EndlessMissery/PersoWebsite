import AboutSection from "./MainContent/AboutSection.jsx";
import ResumeSection from "./MainContent/ResumeSection.jsx";
import ContactSection from "./MainContent/ContactSection.jsx";
import TopRightText from "./Header/CornerText/TopRightText.jsx";
import BottomLeftText from "./Header/CornerText/BottomLeftText.jsx";

const Content = ({ activeTab }) => {

  const tabs = {
    about: <AboutSection />,
    resume: <ResumeSection />,
    contact: <ContactSection />,
  };

  return (
    <div className="content">
      <div className={`content-box ${activeTab}`}>
        {tabs[activeTab]}
      </div>
      <TopRightText />
      <BottomLeftText />
    </div>
  );
};

export default Content;
