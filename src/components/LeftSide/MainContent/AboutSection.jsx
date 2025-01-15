import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useTypewriter from "../../../hooks/useTypewriter";

const AboutSection = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Set isFirstLoad to false after the component is mounted
    const timer = setTimeout(() => setIsFirstLoad(false), 0);
    return () => clearTimeout(timer);
  }, []);

  const aboutIntro = useTypewriter({
    words: ["Hi, my name is"],
    typeSpeed: 30,
    delaySpeed: 4000,
    initialDelay: isFirstLoad ? 2500 : 0, // Apply delay only on first load
  });

  const aboutName = useTypewriter({
    words: ["Roman Kalita"],
    typeSpeed: 70,
    delaySpeed: 4000,
    initialDelay: isFirstLoad ? 3000 : 0, // Apply delay only on first load
  });

  const aboutDesc = useTypewriter({
    words: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry..."],
    cursor: true,
    cursorStyle: "|",
    typeSpeed: 30,
    delaySpeed: 4000,
    initialDelay: isFirstLoad ? 4000 : 0, // Apply delay only on first load
  });

  return (
    <motion.div key="about" className="content-box">
      <h2 className="intro">{aboutIntro}</h2>
      <h1 className="name-intro">{aboutName}</h1>
      <motion.hr
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 3, delay: isFirstLoad ? 3 : 0 }} // Apply delay only on first load
      />
      <p className="intro-desc">{aboutDesc}</p>
    </motion.div>
  );
};

export default AboutSection;
