import './SignUp.scss';
// import Header from '../../Elements/Header/Header';
// import Footer from '../../Elements/Footer/Footer';

function SignUp() {
  return (
    <div className="WebsiteName">
      <header className="Website__title">
        <h1>Organisez rapidement vos évènements</h1>
      </header>
      <div className="SignUp">
        <h2>S'inscrire</h2>
        <form>
          <div className="SignUp__name">
            Nom :
            <input type="text" placeholder="Nom" />
          </div>
          <div className="SignUp__email">
            Adresse email :
            <input type="email" placeholder="Adresse mail" />
          </div>
          <div className="SignUp__password">
            Mot de passe :
            <input type="password" placeholder="Mot de passe" />
          </div>

          <button className="SignUp__confirmation" type="submit">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
