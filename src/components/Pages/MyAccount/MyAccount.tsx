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
  nombreEvenements: number; // Number of events user has organized
}

const MyAccount: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // State for storing user data
  const [error, setError] = useState<string | null>(null); // State for storing any error messages

  // Function to fetch user data from an API
  const fetchUserData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      ); // Fetching data from API
      const data = await response.json(); // Parsing response to JSON

      // Checking if the necessary data is present in the response
      if (
        'nom' in data &&
        'dateInscription' in data &&
        'nombreEvenements' in data
      ) {
        setUser(data); // Setting user data
      } else {
        throw new Error('Invalid user data');
      }
    } catch (error: any) {
      setError(error.message); // Setting error message if any error occurs
      console.error(error);
    }
  };

  // Using useEffect to call fetchUserData when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  // If there's an error, render error message
  if (error) {
    return (
      <div>
        <Header />
        <p className="ErrorMessage">Une erreur est survenue : {error}</p>
        <Footer />
      </div>
    );
  }

  // If user data is not yet loaded, render loading message
  if (!user) {
    return (
      <div>
        <Header />
        <p className="LoadingPage"> En chargement... </p>
        <Footer />
      </div>
    );
  }

  // If user data is loaded, render user data
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
