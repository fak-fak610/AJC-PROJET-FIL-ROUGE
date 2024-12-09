import React, { useState } from "react";

function Contact() {
  // Crée des variables d'état pour l'email et le message
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis", { email, message });
    // Ajoutez ici la logique pour envoyer le formulaire
  };

  return (
    <main className="container">
      <h1>Contact</h1>
      <p>Vous pouvez nous contacter 24h/24</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Votre adresse email :</label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Entrez votre email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Votre message :</label>
          <textarea
            id="message"
            className="form-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
            placeholder="Écrivez votre message ici"
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          Envoyer
        </button>
      </form>
    </main>
  );
}

export default Contact;
