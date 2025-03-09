import React from "react";
import { motion } from "framer-motion";

const ContactButtons = () => {
  const contactInfo = [
    {
      href: "mailto:romankalita010@gmail.com",
      className: "email-button",
      icon: "fas fa-envelope",
      isLink: false,
    },
    {
      href: "https://www.linkedin.com/in/roman-kalita-600643323/",
      className: "linkedin-button",
      icon: "fab fa-linkedin",
      isLink: true,
    },
    /*{
      href: "https://www.facebook.com/roman.mnacek.7/",
      className: "github-button",
      icon: "fab fa-github",
      isLink: true,
    },*/
    {
      href: "https://wa.me/+420773101064",
      className: "whatsapp-button",
      icon: "fab fa-whatsapp",
      isLink: true,
    },
    {
      href: "https://www.facebook.com/roman.mnacek.7/",
      className: "facebook-button",
      icon: "fab fa-facebook",
      isLink: true,
    },
  ];

  return (
    <motion.div
      className="button-container-contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.25 }}
    >
      {contactInfo.map(({ href, className, icon, isLink }, index) =>
        isLink ? (
          <a
            key={index}
            className={className}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={icon}></i>
          </a>
        ) : (
          <button
            key={index}
            className={className}
            onClick={() => (window.location.href = href)}
          >
            <i className={icon}></i>
          </button>
        )
      )}
    </motion.div>
  );
};

export default ContactButtons;
