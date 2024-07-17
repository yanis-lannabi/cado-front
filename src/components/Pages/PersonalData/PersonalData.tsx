import './PersonalData.scss';
import { useState, useEffect } from 'react';

interface UserData {
  name: string;
  email: string;
}

function PersonalData() {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
  });

  useEffect(() => {
    async () => {
      try {
        const response = await fetch('https://cado.zapto.org/me');
        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
        } else {
          console.error('Impossilbe de récupérer les données utilisateur');
        }
      } catch (error) {
        console.error(
          'Erreur à la récupération des données utilisateur',
          error
        );
      }
    };
  });

  return (
    <div className="WebsiteName">
      <header className="Website__Title">
        <h1>Données personnelles</h1>
      </header>
      <div className="PersonalData">
        <div>
          <p>
            <strong>Nom:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
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
