// import { parseAst } from 'vite';
import './PersonalData.scss';

function PersonalData() {
  return (
    <div className="PersonalData">
      <header className="PersonalData-title">
        <h1>Données personnelles</h1>
      </header>

      <div className="PersonalData__name">Nom</div>
      <div className="PersonalData__prénom">Prénom</div>
      <div className="PersonalData__email">E-mail</div>
      <div className="PersonalData__password">Mot de passe</div>
      <div className="PersonalData__passwordVerification">
        Vérification du mot de passe
      </div>
    </div>
  );
}

export default PersonalData;
