// Importing necessary libraries and components
import React, { useEffect, useState } from 'react';
import './MyAccount.scss';
import { Link } from 'react-router-dom';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

// Defining the shape of the user data
interface User {
  nom: string;
  dateInscription: string;
  nombreEvenements: number; // Number of events the user has organized
}

// Initialize user state to null
const MyAccount: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // Fetch user data when the component mounts
  useEffect(() => {
    // Remplacer par l'URL de notre API
    fetch('https://your-api-url.com/user')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  // If the user data is not yet loaded, display a loading message
  if (!user) {
    return <div>En chargement...</div>;
  }

  // Render the user data
  return (
    <div className="MyAccount">
      <Header />
      <header className="MyAccount-title">
        <h1>Mon compte</h1>
      </header>
      <p className="MyAccount-WelcomeMessage">Bienvenue {user.nom}!</p>
      <p className="MyAccount-EventsMessage">
        Vous êtes inscrit(e) depuis le {user.dateInscription} et avez organisé à
        ce jour
        {user.nombreEvenements} évènement(s).
      </p>
      <h2>IMAGE A TROUVER</h2>
      <div className="MyAccount__Buttons">
        <Link
          to="/mes-donnees-personnelles"
          className="MyAccount__personalData"
        >
          Données personnelles
        </Link>
        <Link to="/mes-evenements" className="MyAccount__MyEvents">
          Mes évènements
        </Link>
        <Link to="/creer-un-evenement" className="MyAccount__CreateEvent">
          Nouvel évènement
        </Link>
      </div>
      <Footer />
    </div>
  );
};

// Exporting the MyAccount component for use in other files
export default MyAccount;
