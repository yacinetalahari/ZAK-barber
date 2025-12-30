import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Coupe de Cheveux",
      description:
        "Coupe classique avec tondeuses et ciseaux pour un look net et précis",
      price: "20 €",
      duration: "30 min",
    },
    {
      id: 2,
      title: "Coupe aux Ciseaux",
      description:
        "Coupe uniquement aux ciseaux pour un résultat plus naturel et travaillé",
      price: "25 €",
      duration: "35 min",
    },
    {
      id: 3,
      title: "Coupe + Barbe",
      description:
        "Forfait complet coupe de cheveux et taille de barbe pour une apparence soignée",
      price: "30 €",
      duration: "45 min",
    },
    {
      id: 7,
      title: "Coupe Enfant",
      description:
        "Coupe adaptée pour les enfants, dans une ambiance conviviale et détendue",
      price: "17 €",
      duration: "25 min",
    },
    {
      id: 5,
      title: "Barbe",
      description:
        "Taille, modelage et soin de la barbe pour une barbe parfaitement entretenue",
      price: "15 €",
      duration: "25 min",
    },
    {
      id: 6,
      title: "Rasage à l'Ancienne",
      description:
        "Rasage traditionnel avec serviette chaude et rasoir droit pour le rasage le plus proche",
      price: "20 €",
      duration: "30 min",
    },
    {
      id: 7,
      title: "Ciseaux + Barbe",
      description:
        "Pcoupe aux ciseaux et taille de barbe pour un résultat exceptionnel",
      price: "35 €",
      duration: "50 min",
    },
    {
      id: 8,
      title: "Formule Père & Fils",
      description:
        "Forfait duo pour une coupe père et fils, moment de complicité et de partage",
      price: "35 €",
      duration: "60 min",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services Premium</h2>
          <p className="section-subtitle">
            Découvrez l'art du barbier traditionnel avec une précision moderne
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <h3 className="service-title">{service.title}</h3>
                <span className="service-price">{service.price}</span>
              </div>
              <p className="service-description">{service.description}</p>
              <div className="service-footer">
                <span className="service-duration">{service.duration}</span>
                <a href="#contact" className="service-btn">
                  Réservez maintenant
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
