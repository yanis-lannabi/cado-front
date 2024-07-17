import './PersonalData.scss';
import { useState, useEffect } from 'react';

const PersonalData = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://cado.zapto.org/me', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();
        setUserData({
          name: data.name,
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des données utilisateur:',
          error
        );
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="WebsiteName">
      <header className="PersonalData__Title">
        <h1>Données personnelles</h1>
      </header>
      <div className="PersonalData">
        <div>
          <h2>
            <strong>Nom :</strong> {userData.name}
          </h2>
          <h2>
            <strong>Email :</strong> {userData.email}
          </h2>
          <h2>
            <strong>Mot de passe :</strong> {userData.password}
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
