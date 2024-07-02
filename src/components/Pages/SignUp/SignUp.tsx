import './SignUp.scss';
// import Header from '../../Elements/Header/Header';
// import Footer from '../../Elements/Footer/Footer';

function SignUp() {
  return (
    <div className="SignUp">
      <header className="SignUp__title">
        <h1>Création du compte</h1>
      </header>
      <form>
        <div className="SignUp__name">
          Prénom
          <input type="text" placeholder="Prénom" />
        </div>
        <div className="SignUp__email">
          Adresse mail
          <input type="email" placeholder="Adresse mail" />
        </div>
        <div className="SignUp__password">
          Mot de passe
          <input type="password" placeholder="Mot de passe" />
        </div>

        <button className="SignUp__confirmation" type="submit">
          Créer mon compte
        </button>
      </form>
    </div>
  );
}

export default SignUp;
