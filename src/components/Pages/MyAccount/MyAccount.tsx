// Importing necessary libraries and components
import './MyAccount.scss';
import { useNavigate } from 'react-router-dom';
// src/components/Pages/MyAccount/MyAccount.tsx

import { useAuth } from '../../../Hooks/useAuth';

const MyAccount = () => {
  const navigate = useNavigate();

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
        Bienvenue{' '}
        {authData.user.name.charAt(0).toUpperCase() +
          authData.user.name.slice(1).toLowerCase()}
        !
      </p>
      <h2>IMAGE A TROUVER</h2>
      <div className="MyAccount__Buttons">
        <button
          className="MyAccount__personalData"
          onClick={() => navigate('/mes-donnees-personnelles')}
        >
          Données personnelles
        </button>

        <button
          className="MyAccount__MyEvents"
          onClick={() => navigate('/mes-evenements')}
        >
          Mes évènements
        </button>

        <button
          className="MyAccount__CreateEvent"
          onClick={() => navigate('/creer-un-evenement')}
        >
          Créer un évènement
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
