import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission
    console.log("Formulaire soumis :", formData);
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Entrer en contact</h2>
          <p className="section-subtitle">
            Prenez rendez-vous ou posez-nous vos questions
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Information de contact</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Boulogne-Billancourt</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h4>téléphone</h4>
                <p>07 73 88 44 66</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>Siempreultimo277@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaClock />
              </div>
              <div className="contact-details">
                <h4>heures de travail</h4>
                <p>disponible tous le temps</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Prendre un rendez-vous</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="nom"
                  placeholder="votre Nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="votreEmail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="téléphone"
                  placeholder="votre téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="Sélectionner le service">Service</option>
                  <option value="coupe de cheveux">
                    coupe de cheveux classique
                  </option>
                  <option value="barbe">
                    Taille et mise en forme de la barbe
                  </option>
                  <option value="combo">cheveux & Barbe</option>
                  <option value="Rasage">Rasage au rasoir droit</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Votre message ou date/heure préférée"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-gold">
                envoyer Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
