// import { parseAst } from 'vite';
import './PersonalData.scss';
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
    </div>
  );
}

export default PersonalData;
