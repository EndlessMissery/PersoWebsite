import React from "react";
import { motion } from "framer-motion";
import useTypewriter from "../../../hooks/useTypewriter";

const AboutSection = () => {
  const aboutIntro = useTypewriter({ words: ["Hi, my name is"], typeSpeed: 30, delaySpeed: 2000 });
  const aboutName = useTypewriter({ words: ["Roman Kalita"], typeSpeed: 70, delaySpeed: 1500 });
  const aboutDesc = useTypewriter({
    words: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry..."],
    cursor: true,
    cursorStyle: "|",
    typeSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <motion.div key="about" className="content-box">
      <h2 className="intro">{aboutIntro}</h2>
      <h1 className="name-intro">{aboutName}</h1>
      <motion.hr
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      />
      <p className="intro-desc">{aboutDesc}</p>
    </motion.div>
  );
};

export default AboutSection;

