import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaUser, FaFileAlt, FaEnvelope } from "react-icons/fa";
import useTranslationCustom from "../../../hooks/useTranslationCustom"; // Importuj custom hook

const Footer = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslationCustom(); // Použití custom hooku pro překlady

  const tabLabels = {
    about: { text: t("footer.about"), icon: <FaUser /> },
    resume: { text: t("footer.resume"), icon: <FaFileAlt /> },
    contact: { text: t("footer.contact"), icon: <FaEnvelope /> },
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

export default Footer;
