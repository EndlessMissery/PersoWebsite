import React from "react";
import { motion } from "framer-motion";
import "../../styles/main.css";

const Box = () => {
  return (
    <motion.div
      className="custom-box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 3 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 3 }}>
      </motion.div>
    </motion.div>
  );
};

export default Box;
