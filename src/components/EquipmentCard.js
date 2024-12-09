import React from "react";

function EquipmentCard({ nom, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={nom} className="card-image" />
      <h2>{nom}</h2>
      <p>{description}</p>
    </div>
  );
}

export default EquipmentCard;
