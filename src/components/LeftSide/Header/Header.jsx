import React, { useEffect } from "react";
import { motion } from "framer-motion";

const logo = '/public/assets/logo.png';

function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

const Header = () => {
  useEffect(() => {
    if (isSafari()) {
      const logoElement = document.querySelector(".logo");
      if (logoElement) {
        //FHD Safari
        logoElement.style.position = "relative";
        logoElement.style.top = "-55px";
        logoElement.style.left = "-70px";
        logoElement.style.scale = ".65";
        
        //2K Safari
        if (window.innerWidth >= 2560) {
          logoElement.style.top = "-130px";
          logoElement.style.left = "-150px";
          logoElement.style.scale = ".70";
        }
      }
    }
  }, []);

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.5 }}
    >
      <img src={logo} alt="Logo" className="logo" draggable="false" />
    </motion.header>
  );
};

export default Header;
