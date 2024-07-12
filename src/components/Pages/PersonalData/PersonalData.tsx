import './PersonalData.scss';
import React, { useState, useEffect } from 'react';

interface UserData {
  nom: string;
  prénom: string;
  email: string;
  password: string;
}

function PersonalData() {
  const [userData, setUserData] = useState<UserData>({
    nom: '',
    prénom: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('authData') || '{}');
    setUserData({
      nom: authData.nom || '',
      prénom: authData.prénom || '',
      email: authData.email || '',
      password: authData.password || '',
    });
  }, []);

  return (
    <div className="WebsiteName">
      <header className="Website__Title">
        <h1>Données personnelles</h1>
      </header>
      <div className="PersonalData">
        <div>
          <p>
            <strong>Nom:</strong> {userData.nom}
          </p>
          <p>
            <strong>Prénom:</strong> {userData.prénom}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Mot de passe:</strong> {userData.password}
          </p>
        </div>
        {/* <button onClick={handleSave}>Enregistrer</button> 
        Ce bouton sera utilisé si on met en place les modifications
        de données personnelles */}
      </div>
    </div>
  );
}

export default PersonalData;
