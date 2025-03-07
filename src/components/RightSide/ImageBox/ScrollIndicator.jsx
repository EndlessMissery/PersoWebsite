import React from 'react';
import { motion } from 'framer-motion';
import useTranslationCustom from '../../../hooks/useTranslationCustom';

const ScrollIndicator = () => {
  const { t } = useTranslationCustom();
  return (
    <motion.div
      className="scroll-tutorial"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 4 }}
    >
      <div className="scroll-icon">
        <motion.div
          animate={{ y: ['0%', '-20%', '0%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span role="img" aria-label="scroll">🖱️</span>
        </motion.div>
        <p>{t("scrollIndicator.scrollGuide")}</p>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;

