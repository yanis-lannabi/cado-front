import './Login.scss';
//import Header from './.../Element/Header/Header';
//import Footer from './.../Element/Footer/Footer';

function Login() {
  return (
    <div className="WebsiteName">
      <header className="Website__Title">
        <h1>Cad'O</h1>
      </header>
      <div className="Login">
        <h2>Connectez-vous à votre compte</h2>
        <form>
          <div className="Login__email">
            <input type="email" placeholder="email" />
          </div>
          <div className="Login__password">
            <input type="password" placeholder="password" />
          </div>
          <button className="Login__confirmation" type="submit">
            Continuer
          </button>
        </form>
        <p className="Login__newAccount">
          ------Pas de compte, Créez-en un------
        </p>
        <button className="Login__createAccount" type="submit">
          Créer un compte
        </button>
      </div>
    </div>
  );
}

export default Login;
