import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">À propos ZAK Barber</h2>
          <p className="section-subtitle">Le détail fait la différence</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-highlight">
              <h3>L'artisanat réinventé</h3>
              <p>
                Chez ZAK Barber, nous avons élevé l'expérience traditionnelle du
                salon de coiffure à un véritable art. Nos maîtres-barbiers
                combinent des techniques ancestrales avec un style contemporain
                pour offrir des résultats exceptionnels à chaque client.
              </p>
            </div>

            <div className="about-features">
              <div className="feature">
                <span className="feature-number">01</span>
                <div className="feature-content">
                  <h4>Coiffeur Expert</h4>
                  <p>
                    Fort de plusieurs années d'expérience dans l'art de la
                    coiffure .
                  </p>
                </div>
              </div>

              <div className="feature">
                <span className="feature-number">02</span>
                <div className="feature-content">
                  <h4>Produits haut de gamme</h4>
                  <p>
                    les meilleurs produits de soins pour garantir les meilleurs
                    résultats .
                  </p>
                </div>
              </div>

              <div className="feature">
                <span className="feature-number">03</span>
                <div className="feature-content">
                  <h4>Environnement moderne</h4>
                  <p>
                    Une expérience professionelle, confortable et luxueuse avec
                    ZAK .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Clients satisfaits</span>
            </div>

            <div className="stat">
              <span className="stat-number"></span>
              <span className="stat-label"></span>
            </div>

            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Fidélisation des clients</span>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h3>Experiencer la Difference avec ZAK</h3>
          <p>
            Réservez votre rendez-vous dès aujourd'hui et découvrez pourquoi ZAk
            est le choix préféré des gentlemen exigeants.
          </p>
          <a href="#contact" className="btn btn-gold">
            Réservez votre visite
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
