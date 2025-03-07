import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useTypewriter from "../../../hooks/useTypewriter";
import useTranslationCustom from "../../../hooks/useTranslationCustom"; 

const AboutSection = () => {
  const { t, language } = useTranslationCustom(); 
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), 0);
    return () => clearTimeout(timer);
  }, []);

  const aboutIntro = useTypewriter({
    words: [t("aboutSection.intro")],
    typeSpeed: 70,
    delaySpeed: 4000,
    initialDelay: isFirstLoad ? 2500 : 0,
  });

  const aboutName = useTypewriter({
    words: [t("aboutSection.name")],
    cursor: true,
    cursorStyle: "|",
    typeSpeed: 70,
    delaySpeed: 4000,
    initialDelay: isFirstLoad ? 3000 : 0,
  });

  const aboutDesc = useTypewriter({
    words: [t("aboutSection.description")],
    cursor: false,
    cursorStyle: "|",
    typeSpeed: 35,
    delaySpeed: 4000,
    initialDelay: isFirstLoad ? 4000 : 0,
  });

  return (
    <motion.div key={language} className="content-box-about">
      <h2 className="intro-about">{aboutIntro}</h2>
      <h1 className="name-intro-about">{aboutName}</h1>
      <motion.hr
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: isFirstLoad ? 0.1 : 1 }}
      />
      <p className="intro-desc">{aboutDesc}</p>
    </motion.div>
  );
};

export default AboutSection;
