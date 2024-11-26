import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          {/* TODO: cambiar los links */}
          <a
            href="https://facebook.com"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/neidashoponline"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.tiktok.com/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
          <a href="mailto:dneidazu@gmail.com" className="social-icon">
            <i className="far fa-envelope fa-2x"></i>
          </a>
          <a href="tel:+56947184073" className="social-icon">
            <i className="fas fa-phone fa-2x"></i>
          </a>
        </div>
        <div className="footer-copyright">
          <p>© 2024 Copyright Codelium</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
