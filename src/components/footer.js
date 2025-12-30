import React from "react";
import "./Footer.css";
import { FaSnapchat, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p className="footer-description">
              Là où la tradition classique de la coiffure rencontre le style
              contemporain. Découvrez les meilleurs services de soins dans un
              environnement haut de gamme.
            </p>
            <div className="social-links">
              <a
                href="https://www.snapchat.com/add/ezak75015"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaSnapchat />
              </a>
              <a
                href="https://wa.me/07 73 88 44 66"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Liens rapides</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Accueil</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#gallery">Galerie</a>
              </li>
              <li>
                <a href="#about">À propos</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#services">coupe de cheveux classique</a>
              </li>
              <li>
                <a href="#services">Coupe de barbe</a>
              </li>
              <li>
                <a href="#services">Coiffure et barbe</a>
              </li>
              <li>
                <a href="#services">Rasage au coupe-chou</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Informations de contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span>Boulogne-Billancourt</span>
              </div>
              <div className="contact-item">
                <span> 07 73 88 44 66</span>
              </div>
              <div className="contact-item">
                <span>Siempreultimo277@email.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="bottom-content">
            <p>&copy; 2026 ZAK Barber. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
