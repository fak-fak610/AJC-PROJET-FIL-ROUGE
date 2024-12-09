// CoachCard : Carte de présentation d'un coach
// Principe : Composant réutilisable pour afficher les informations des
// CoachCard : Affiche les infos d'un coach
import React from "react";

function CoachCard({ nom, image, description }) {
  // Chaque coach est comme une carte de visite numérique
  return (
    <div className="card">
      {/* Image du coach - première impression visuelle */}
      <img src={image} alt={`Coach ${nom}`} className="card-image" />
      <h2>{nom}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CoachCard;
