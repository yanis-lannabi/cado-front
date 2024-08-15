import './PersonalData.scss';

import { useState, useEffect } from 'react';

const PersonalData = () => {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3000/me', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();
        setUserData({
          id: data.id,
          name: data.name,
          email: data.email,
          password: data.password,
        });
        console.log('data', userData);
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des données utilisateur:',
          error
        );
      }
    };

    fetchUserData();
  }, []);

  const hidePassword = () => {
    return '*'.repeat(10);
  };

  return (
    <div className="PersonalData">
      <header>
        <h1 className="PersonalData__Title">Données personnelles</h1>
      </header>
      <div className="PersonalData__details">
        <div>
          <h2 className="PersonalData__item">
            <strong>Nom :</strong> {userData.name}
          </h2>
          <h2 className="PersonalData__item">
            <strong>Email :</strong> {userData.email}
          </h2>
          <h2 className="PersonalData__item">
            <strong>Mot de passe :</strong> {hidePassword()}
          </h2>
        </div>
        {/* <button onClick={handleSave}>Enregistrer</button> 

        Ce bouton sera utilisé si on met en place les modifications
        de données personnelles */}
      </div>
    </div>
  );
};

export default PersonalData;
