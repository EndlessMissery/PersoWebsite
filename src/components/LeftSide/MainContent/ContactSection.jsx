import React from "react";
import { motion } from "framer-motion";
import Buttons from "./ContactButtons";
import { Typewriter } from "react-simple-typewriter";
import useScreenSize from "../../../hooks/useScreenSize"; // Import screen size hook
import useTranslationCustom from "../../../hooks/useTranslationCustom";

const ContactSection = () => {
  const { t, language } = useTranslationCustom();
  const isMobile = useScreenSize(); // Check if the device is mobile
  const contactText = t("contactSection.contact");

  return (
    <motion.div key={language} className="content-box">
      <h1 className="name-intro">
        {!isMobile ? (
          <Typewriter
            words={[contactText]} // Ensure the words are wrapped in an array
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={4000}
          />
        ) : (
          contactText // Directly display the translated text on mobile
        )}
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
