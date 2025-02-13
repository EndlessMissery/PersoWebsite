import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './styles/main.css';

const LanguageSwitcher = () => {
  const systemLanguage = navigator.language.startsWith('cs') ? 'cs' : 'en'; // Default to English if not Czech
  const [selectedLanguage, setSelectedLanguage] = useState(systemLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(systemLanguage); // Set the detected language
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [systemLanguage, hasAnimated]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    setIsMenuOpen(false);
  };

  return (
    <motion.div
      key={selectedLanguage}
      className="language-switcher"
      onMouseEnter={() => setIsMenuOpen(true)}
      initial={hasAnimated ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: hasAnimated ? 0 : 5.5 }}
    >
      <button className={`language-icon ${isMenuOpen ? 'active' : ''}`}>
        <FaGlobe />
      </button>

      <div className={`language-options ${isMenuOpen ? 'open' : ''}`}>
        <button
          onClick={() => handleLanguageChange('cs')}
          className={selectedLanguage === 'cs' ? 'active' : ''}
          style={{ opacity: selectedLanguage === 'cs' ? 1 : 0.25 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/800px-Flag_of_the_Czech_Republic.svg.png"
            alt="Czech Flag"
            className="flag-icon"
          />
        </button>

        <button
          onClick={() => handleLanguageChange('en')}
          className={selectedLanguage === 'en' ? 'active' : ''}
          style={{ opacity: selectedLanguage === 'en' ? 1 : 0.25 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png"
            alt="English Flag"
            className="flag-icon"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default LanguageSwitcher;
