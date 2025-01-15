import React from "react";
import { motion } from "framer-motion";
import logo from "../../../assets/logo.png";

const Header = () => (
  <motion.header
    className="header"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, delay: 1.5 }}
  >
    <img src={logo} alt="Logo" className="logo" draggable="false" />
  </motion.header>
);

export default Header;

