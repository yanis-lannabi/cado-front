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
  nombreEvenements: number;
}

const MyAccount: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();

      if (
        'nom' in data &&
        'dateInscription' in data &&
        'nombreEvenements' in data
      ) {
        setUser(data);
      } else {
        throw new Error('Invalid user data');
      }
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (error) {
    return (
      <div>
        <Header />
        <p className="ErrorMessage">Une erreur est survenue : {error}</p>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <Header />
        <p className="LoadingPage"> En chargement... </p>
        <Footer />
      </div>
    );
  }

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

export default MyAccount;
