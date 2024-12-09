import React, { useState, useEffect } from "react";
import CoachList from "../components/CoachList";
import GokuImage from "../assets/images/GOKU 1.jpg";
import VegetaImage from "../assets/images/vegeta 2.JPG";
import YamiImage from "../assets/images/Yami 3.jpg";
import AstaImage from "../assets/images/asta 4.jpg";
import GutsImage from "../assets/images/GUTS 5.JPG";
import SaitamaImage from "../assets/images/saitama 6.JPG";

function Coaches() {
  // useState : Crée une variable d'état et une fonction pour la modifier
  const [coaches, setCoaches] = useState([]);
  // useEffect : Exécute du code après le rendu du composant

  useEffect(() => {
    const data = [
      {
        id: 1,
        nom: "Goku",
        image: GokuImage,
        description:
          "Goku est un coach dynamique, toujours prêt à vous motiver pour atteindre vos objectifs !",
      },
      {
        id: 2,
        nom: "Vegeta",
        image: VegetaImage,
        description:
          "Vegeta, le prince des Saiyans, apportera discipline et rigueur dans votre entraînement.",
      },
      {
        id: 3,
        nom: "Yami",
        image: YamiImage,
        description:
          "Yami est un coach énergique et déterminé, avec une discipline de fer.",
      },
      {
        id: 4,
        nom: "Asta",
        image: AstaImage,
        description:
          "Asta, avec sa persévérance sans limite, vous guidera vers votre réussite.",
      },
      {
        id: 5,
        nom: "Guts",
        image: GutsImage,
        description:
          "Guts est un coach résilient, qui met l'accent sur l'intensité et la stratégie.",
      },
      {
        id: 6,
        nom: "Saitama",
        image: SaitamaImage,
        description:
          "Saitama vous apprendra à rester humble et à surmonter n'importe quel obstacle.",
      },
    ];

    setCoaches(data);
  }, []);

  return (
    <main className="container">
      <h1>Nos Coachs</h1>
      <CoachList coaches={coaches} />
    </main>
  );
}

export default Coaches;
