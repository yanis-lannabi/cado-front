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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <div className="WebsiteName">
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
            name="prénom"
            value={userData.prénom}
            onChange={handleChange}
          />
          <p>Email</p>
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
        </form>
      </div>
    </div>
  );
}

export default PersonalData;
