import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a
            href="https://facebook.com"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://instagram.com"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="mailto:contact@neidashop.com" className="social-icon">
            <i className="far fa-envelope fa-2x"></i>
          </a>
          <a href="tel:+1234567890" className="social-icon">
            <i className="fas fa-phone fa-2x"></i>
          </a>
        </div>
        <div className="footer-copyright">
          <p>© 2024 Copyright: Codelium</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
