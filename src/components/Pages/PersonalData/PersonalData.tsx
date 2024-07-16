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
    <div className="PersonalData">
      <header className="PersonalData__Title">
        <h1 className="PersonalData__h1">Données personnelles</h1>
      </header>
      <div className="PersonalData__details">
        <p className="PersonalData__item">
          <strong>Nom:</strong> {userData.nom}
        </p>
        <p className="PersonalData__item">
          <strong>Prénom:</strong> {userData.prénom}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p className="PersonalData__item">
          <strong>Mot de passe:</strong> {userData.password}
          {/* Afficher le mot de passe en texte brut n'est généralement pas une bonne pratique pour des raisons de sécurité. Même si c'est sur le côté client, cela peut toujours poser des problèmes de sécurité, surtout si l'écran est visible par d'autres personnes. Vous devriez envisager de ne pas afficher le mot de passe ou de le masquer d'une manière ou d'une autre. */}
        </p>
        {/* <button onClick={handleSave}>Enregistrer</button>
        Ce bouton sera utilisé si on met en place les modifications
        de données personnelles */}
      </div>
    </div>
  );
}
export default PersonalData;
