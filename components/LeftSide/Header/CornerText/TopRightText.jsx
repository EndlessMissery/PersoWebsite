import React from "react";
import { motion } from "framer-motion";
import useControlledTypewriter from "../../../../hooks/useControlledTypewriter";

const TopRightText = () => {
  const topRightText = useControlledTypewriter(["UX/UI Designer", "#eeeeee", "Illustrator", "#060606"], 1500, 50, 50, "|");

  return (
    <motion.div
      className="corner top-right typewriter-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {topRightText}
    </motion.div>
  );
};

export default TopRightText;

