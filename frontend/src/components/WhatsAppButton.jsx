import React from "react";
/* import whatsappIcon from "../../assets/img/landing/social_12942283.svg"; */
//TODO: Lo dejo aquí mientras, por ahora uso fontawesome ↑

import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/56947184073"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;

/* import React from "react";
import whatsappIcon from "../../assets/img/landing/social_12942283.svg"; // Update this path if needed
import "./WhatsAppButton.css"; // Import the CSS file

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/56947184073"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton; */
