// CoachList : Affiche une liste de coachs
import React from "react";
import CoachCard from "./CoachCard";

function CoachList({ coaches }) {
  return (
    <div className="grid">
      {/* 
        map : Fonction qui transforme chaque élément d'un tableau
        Ici, chaque 'coach' devient un composant <CoachCard>
      */}
      {coaches.map((coach) => (
        <CoachCard key={coach.id} {...coach} />
      ))}
    </div>
  );
}

export default CoachList;
