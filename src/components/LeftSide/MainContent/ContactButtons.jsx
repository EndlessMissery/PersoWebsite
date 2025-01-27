import React from "react";
import { motion } from "framer-motion";

const Buttons = () => (
  <motion.div
    className="button-table"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, delay: .5}}
  >
    <table>
      <tbody>
        <tr>
          <td>
            <button
              className="email-button"
              onClick={() => (window.location.href = "mailto:romankalita010@gmail.com")}
            >
              <i className="fas fa-envelope"></i> Email
            </button>
          </td>
          <td>
            <a
              className="linkedin-button"
              href="https://www.linkedin.com/in/roman-kalita-600643323/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              className="whatsapp-button"
              href="https://wa.me/+420773101064"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </td>
          <td>
            <a
              className="facebook-button"
              href="https://www.facebook.com/roman.mnacek.7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </motion.div>
);

export default Buttons;

