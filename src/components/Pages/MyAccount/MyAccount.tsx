// Importing necessary libraries and components
import React, { useEffect, useState } from 'react';
import './MyAccount.scss';
import { Link } from 'react-router-dom';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

// Defining the shape of the user data
interface User {
  name: string; // Number of events user has organized
}

const MyAccount: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // State for storing user data
  const [error, setError] = useState<string | null>(null); // State for storing any error messages

  // Function to fetch user data from an API
  const fetchUserData = async () => {
    try {
      const response = await fetch('http://165.227.232.51:3000/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }); // Fetching data from API
      if (!response.ok) {
        console.error(error);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      const data = await response.json(); // Parsing response to JSON

      // Checking if the necessary data is present in the response
      if ('name' in data) {
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
      <p className="MyAccount-WelcomeMessage">Bienvenue {user.name}!</p>
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
