import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="logo-badge">
            <span className="logo-xv">ZAK</span>
            <span className="logo-barber">BARBER</span>
          </div>
          <h1 className="hero-title">SOINS PREMIUM POUR HOMMES</h1>
          <p className="hero-subtitle">
            Là où la tradition classique de la coiffure rencontre le style
            contemporain
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Notre Services
            </a>
            <a href="#contact" className="btn btn-secondary">
              Réservez maintenant
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="featured-cut"></div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Faites défiler vers le bas</span>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
