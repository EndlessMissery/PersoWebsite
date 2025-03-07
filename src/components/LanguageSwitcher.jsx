import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { motion } from 'framer-motion';
import '../styles/main.css';
import czFlag from '../assets/LanguageFlags/cz.webp';
import ukFlag from '../assets/LanguageFlags/uk.webp';

const LanguageSwitcher = () => {
  const systemLanguage = navigator.language.startsWith('cs') ? 'cs' : 'en';
  const [selectedLanguage, setSelectedLanguage] = useState(systemLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(systemLanguage);
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
      <button className={`language-icon ${isMenuOpen ? 'active' : ''}`} aria-label="Toggle language menu">
        {/* Globe Icon from Font Awesome CDN */}
        <i className="fa-solid fa-globe" style={{ fontSize: '28px' }}></i>
      </button>

      <div className={`language-options ${isMenuOpen ? 'open' : ''}`}>
        <button
          onClick={() => handleLanguageChange('cs')}
          className={selectedLanguage === 'cs' ? 'active' : ''}
          style={{ opacity: selectedLanguage === 'cs' ? 1 : 0.25 }}
        >
          <img
            src={czFlag}
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
            src={ukFlag}
            alt="English Flag"
            className="flag-icon"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default LanguageSwitcher;
