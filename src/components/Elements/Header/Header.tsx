import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '/MainLogo.png';
import './Header.scss';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let buttons;
  if (
    ['/', '/s-inscrire', '/resultat', '/mentions-legales', '/faq'].includes(
      location.pathname
    )
  ) {
    buttons = (
      <div>
        <button onClick={() => navigate('/se-connecter')}>Connection</button>
      </div>
    );
  } else if (
    [
      '/mes-donnees-personnelles',
      '/mes-evenements',
      '/creer-un-evenement',
      '/details-evenement',
    ].includes(location.pathname)
  ) {
    buttons = (
      <div>
        <button onClick={() => navigate('/mon-compte')}>Mon Compte</button>
        <button onClick={() => navigate('/se-connecter')}>Déconnection</button>
      </div>
    );
  } else if (location.pathname === '/mon-compte') {
    buttons = (
      <div>
        <button onClick={() => navigate('/se-connecter')}>Déconnection</button>
      </div>
    );
  } else if (location.pathname === '/se-connecter') {
    buttons = null;
  }

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      {buttons}
    </header>
  );
};

export default Header;
