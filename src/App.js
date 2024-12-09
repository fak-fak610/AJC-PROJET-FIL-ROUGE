// App : Composant principal de l'application
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Coaches from "./pages/Coaches";
import Equipment from "./pages/Equipment";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      {/* Header : Barre de navigation en haut de chaque page */}
      <Header />
      {/* Routes : Définit la structure de navigation de l'application */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/equipment" element={<Equipment />} />{" "}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Footer : Pied de page présent sur chaque page */}
      <Footer />
    </div>
  );
}

export default App;
