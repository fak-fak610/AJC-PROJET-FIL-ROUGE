import React from "react";
import AllMightImage from "../assets/images/all might.jpg"; // Assurez-vous que le chemin est correct

function Home() {
  return (
    <main className="container">
      <h1>Accueil</h1>
      <p>Bienvenue sur fak-fak training</p>
      <p>
        Prêt à dépasser vos limites ? Prêt à changer ? Prêt à accomplir vos
        objectifs ? Alors vous êtes au bon endroit ! Au-delà des limite, Plus
        Ultra !
      </p>
      <div className="image-container">
        <img src={AllMightImage} alt="All Might" className="home-image" />
      </div>
    </main>
  );
}

export default Home;
