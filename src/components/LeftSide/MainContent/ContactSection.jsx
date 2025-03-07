import React from "react";
import { motion } from "framer-motion";
import Buttons from "./MainContentButtons/ContactButtons";
import { Typewriter } from "react-simple-typewriter";
import useTranslationCustom from "../../../hooks/useTranslationCustom";

const ContactSection = () => {
  const { t, language } = useTranslationCustom();
  const contactText = t("contactSection.contact");

  return (
    <motion.div key={language} className="content-box">
      <h1 className="name-intro">
        <Typewriter
          words={[contactText]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={4000}
        />
      </h1>
      <motion.hr
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      />
      <Buttons />
    </motion.div>
  );
};

export default ContactSection;
