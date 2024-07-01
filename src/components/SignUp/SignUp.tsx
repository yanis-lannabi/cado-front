import './SignUp.scss';

function SignUp() {
  return (
    <div className="SignUp">
      <header className="SignUp-header">
        <h1>Création du compte</h1>
      </header>
      <p>Prénom</p>
      <p>Adresse mail</p>
      <p>Mot de passe</p>

      <button>Créer mon compte</button>
    </div>
  );
}

export default SignUp;
