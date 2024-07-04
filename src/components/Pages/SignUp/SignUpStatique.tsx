import './SignUp.scss';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

function SignUp() {
  return (
    <div className="SignUp">
      <Header />
      <header className="SignUp-header">
        <h1>Création du compte</h1>
      </header>
      <p>Prénom</p>
      <p>Adresse mail</p>
      <p>Mot de passe</p>
      <button>Créer mon compte</button>
      <Footer />
    </div>
  );
}

export default SignUp;
