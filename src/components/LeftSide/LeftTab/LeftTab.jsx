import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useTranslationCustom from "../../../hooks/useTranslationCustom"; 

const LeftTab = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslationCustom(); 

  const tabLabels = {
    about: { text: t("footer.about"), icon: <img src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/svgs/solid/user.svg" alt="User" /> },
    resume: { text: t("footer.resume"), icon: <img src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/svgs/solid/file-alt.svg" alt="Resume" /> },
    contact: { text: t("footer.contact"), icon: <img src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/svgs/solid/envelope.svg" alt="Contact" /> },
  };

  const controls = useAnimation();
  const sliderRef = useRef(null);

  useEffect(() => {
    const activeButton = document.querySelector(".tab.active");
    if (activeButton && sliderRef.current) {
      controls.start({ x: activeButton.offsetLeft, transition: { duration: 0.25, ease: "easeInOut" } });
    }
  }, [activeTab, controls]);

  return (
    <motion.footer className="footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }}>
      <motion.div className="footer-slider" ref={sliderRef} animate={controls}></motion.div>
      <div className="footer-tabs">
        {Object.keys(tabLabels).map((tab) => (
          <button key={tab} className={activeTab === tab ? "tab active" : "tab"} onClick={() => setActiveTab(tab)}>
            <span className="icon">{tabLabels[tab].icon}</span>
            <span className="text">{tabLabels[tab].text}</span>
          </button>
        ))}
      </div>
    </motion.footer>
  );
};

export default LeftTab;
