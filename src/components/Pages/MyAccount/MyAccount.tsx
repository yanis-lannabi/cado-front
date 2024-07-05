import './MyAccount.scss';

import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

function MyAccount() {
  return (
    <div className="MyAccount">
      <Header />
      <header className="MyAccount-title">
        <h1>Mon compte</h1>
      </header>
      <p className="MyAccount-WelcomeMessage">Bienvenue [prénom]!</p>
      <p className="MyAccount-EventsMessage">
        Vous êtes inscrit(e) depuis le [date] et avez organisé à ce jour
        [quantité] évènement(s).
      </p>
      <h2>IMAGE A TROUVER</h2>
      <div className="MyAccount__Buttons">
        <button className="MyAccount__personalData" type="submit">
          Données personnelles
        </button>
        <button className="MyAccount__MyEvents" type="submit">
          Mes évènements
        </button>
        <button className="MyAccount__CreateEvent" type="submit">
          Nouvel évènement
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default MyAccount;
