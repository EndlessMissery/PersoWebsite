import React from "react";
import { motion } from "framer-motion";
import useControlledTypewriter from "../../../../hooks/useControlledTypewriter";

const BottomLeftText = () => {
  const bottomLeftText = useControlledTypewriter(["#36589", "Illustrator", "#1EBE53", "UX/UI Designer"], 1500, 50, 50, "|");

  return (
    <motion.div
      className="corner bottom-left typewriter-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.5 }}
    >
      {bottomLeftText}
    </motion.div>
  );
};

export default BottomLeftText;

