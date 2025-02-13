import React from "react";
import { motion } from "framer-motion";
import useScreenSize from "../../../hooks/useScreenSize"; // Add the screen size hook

const ContactButtons = () => {
  return (
    <motion.div
      className="button-container-contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <button
        className="email-button" 
        onClick={() => (window.location.href = "mailto:romankalita010@gmail.com")}
      >
        <i className="fas fa-envelope"></i>
      </button>

      <a
        className="linkedin-button"
        href="https://www.linkedin.com/in/roman-kalita-600643323/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>

      <a
        className="whatsapp-button"
        href="https://wa.me/+420773101064"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <a
        className="facebook-button"
        href="https://www.facebook.com/roman.mnacek.7/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook"></i>
      </a>
    </motion.div>
  );
};

export default ContactButtons;