import React from "react";
import "./Gallery.css";

const Gallery = () => {
  // Updated gallery images with more reliable links
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      title: "Dégradé Français",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      title: "Barbe Sculptée",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      title: "Coupe Contemporaine",
    },
    {
      id: 4,

      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      title: "Rasage au Rasoir",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      title: "Style Urbain",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      title: "Toilettage Complet",
    },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Gallerie</h2>
        <p className="section-subtitle">
          Découvrez nos derniers travaux et transformations
        </p>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.title} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
