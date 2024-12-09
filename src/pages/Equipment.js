import React, { useState, useEffect } from "react";
import EquipmentCard from "../components/EquipmentCard";
import TapisImage from "../assets/images/tapis.jpg"; // Chemin correct vers l'image
import HaltèresImage from "../assets/images/halteres 2.jpg"; // Assurez-vous que le nom du fichier est correct
import MachinePapillonImage from "../assets/images/machine papillon.jpg"; // Assurez-vous que le nom du fichier est correct
import BancImage from "../assets/images/bancs.jpg"; // Chemin correct vers l'image

function Equipment() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        nom: "Tapis de course",
        image: TapisImage,
        description:
          "Un tapis de course de haute qualité, idéal pour vos séances de cardio et d'endurance.",
      },
      {
        id: 2,
        nom: "Haltères",
        image: HaltèresImage,
        description:
          "Des haltères de différents poids pour des entraînements de renforcement musculaire variés.",
      },
      {
        id: 3,
        nom: "Machine Papillon",
        image: MachinePapillonImage,
        description:
          "Une machine idéale pour travailler les muscles pectoraux et renforcer la poitrine.",
      },
      {
        id: 4,
        nom: "Banc de Musculation",
        image: BancImage,
        description:
          "Un banc réglable pour effectuer une variété d'exercices de musculation avec des poids libres.",
      },
    ];

    setEquipment(data);
  }, []);

  return (
    <main className="container">
      <h1>Matériel</h1>
      <p>Voici le matériel dont vous disposez</p>
      <div className="grid">
        {equipment.map((item) => (
          <EquipmentCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}

export default Equipment;
