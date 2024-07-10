// import { parseAst } from 'vite';
import './PersonalData.scss';
import React, { useState } from 'react';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

function PersonalData() {
  const [userData, setUserData] = useState({
    nom: '',
    prénom: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <div className="WebsiteName">
      <Header />
      <header className="Website__Title">
        <h1>Données personnelles</h1>
      </header>
      <div className="PersonalData">
        <form>
          <p>Nom</p>
          <input
            type="text"
            name="nom"
            value={userData.nom}
            onChange={handleChange}
          />
          <p>Prénom</p>
          <input
            type="text"
            name="prenom"
            value={userData.prénom}
            onChange={handleChange}
          />
          <p>E-mail</p>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <p>Mot de passe</p>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <p>Vérification du mot de passe</p>
          <input type="password" />
        </form>
        <button className="PersonalData__confirmation" type="submit">
          Enregistrement des données modifiées
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default PersonalData;
