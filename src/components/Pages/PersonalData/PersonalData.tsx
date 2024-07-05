// import { parseAst } from 'vite';
import './PersonalData.scss';
<<<<<<< HEAD
// import Header from '../../Elements/Header/Header';
// import Footer from '../../Elements/Footer/Footer';

function PersonalData() {
  return (
    <div className="WebsiteName">
      <header className="Website__Title">
        <h1>Données personnelles</h1>
      </header>
      <div className="PersonalData">
        <form>
          <p>Nom</p>
          <p>Prénom</p>
          <p>E-mail</p>
          <p>Mot de passe</p>
          <p>Vérification du mot de passe</p>
        </form>
        <button className="PersonalData__confirmation" type="submit">
          Enregistrement des données modifiées
        </button>
      </div>
=======
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

function PersonalData() {
  return (
    <div className="PersonalData">
      <Header />
      <header className="PersonalData-header">
        <h1>Données personnelles</h1>
      </header>

      <p>Nom</p>
      <p>Prenom</p>
      <p>E-mail</p>
      <p>Mot de passe</p>
      <p>Vérification du mot de passe</p>
      <Footer />
>>>>>>> parent of cf1c317... update feature/faq2
    </div>
  );
}

export default PersonalData;
