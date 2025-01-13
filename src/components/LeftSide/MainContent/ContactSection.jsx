import React from "react";
import { motion } from "framer-motion";
import Buttons from "../ContactButtons";
import { Typewriter } from "react-simple-typewriter";

const ContactSection = () => {
  return (
    <motion.div key="contact" className="content-box">
      <h1 className="name-intro">
        <Typewriter
          words={["Contact Me"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={30}
          deleteSpeed={50}
          delaySpeed={2000}
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

