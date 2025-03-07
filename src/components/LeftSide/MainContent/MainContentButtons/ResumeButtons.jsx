import React from "react";
import { motion } from "framer-motion";
import useTranslationCustom from "../../../../hooks/useTranslationCustom";

const ResumeButtons = ({ activeSection, setActiveSection }) => {
  const { t } = useTranslationCustom();

  return (
    <motion.div
      className="buttons-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 0.25 }}
    >
      <motion.button
        className={`button ${activeSection === "education" ? "active" : ""}`}
        onClick={() => setActiveSection("education")}
      >
        <i className="fas fa-university"></i> {t("resumeSection.education")}
      </motion.button>

      <motion.button
        className={`button ${activeSection === "experience" ? "active" : ""}`}
        onClick={() => setActiveSection("experience")}
      >
        <i className="fas fa-briefcase"></i> {t("resumeSection.experience")}
      </motion.button>

      <motion.button
        className={`button ${activeSection === "skills" ? "active" : ""}`}
        onClick={() => setActiveSection("skills")}
      >
        <i className="fas fa-clipboard-list"></i> {t("resumeSection.skill")}
      </motion.button>
    </motion.div>
  );
};

export default ResumeButtons;
