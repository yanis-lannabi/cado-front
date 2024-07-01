// import { parseAst } from 'vite';
import './PersonalData.scss';

function PersonalData() {
  return (
    <div className="PersonalData">
      <header className="PersonalData-header">
        <h1>Données personnelles</h1>
      </header>

      <p>Nom</p>
      <p>Prenom</p>
      <p>E-mail</p>
      <p>Mot de passe</p>
      <p>Vérification du mot de passe</p>
    </div>
  );
}

export default PersonalData;
