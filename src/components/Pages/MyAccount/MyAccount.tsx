// Importing necessary libraries and components
import './MyAccount.scss';
import { Link } from 'react-router-dom';
// src/components/Pages/MyAccount/MyAccount.tsx

import { useAuth } from '../../../Hooks/useAuth';

const MyAccount = () => {
  const { authData } = useAuth();

  if (!authData || !authData.user) {
    return <div>Veuillez vous connecter.</div>;
  }

  return (
    <div className="MyAccount">
      <header className="MyAccount-title">
        <h1>Mon compte</h1>
      </header>
      <p className="MyAccount-WelcomeMessage">
        Bienvenue {authData.user.name.toUpperCase()}!
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
    </div>
  );
};

export default MyAccount;
