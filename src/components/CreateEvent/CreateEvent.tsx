import './CreateEvent.scss';

function CreateEvent() {
  return (
    <div className="create-event">
      <header className="header">
        <img src="../../assets/logo.svg" alt="logo" />
        <button>Déconnexion</button>
      </header>

      <h1>Créer mon évènement</h1>

      <div className="create-event__name">
        <h2>Nom de l'évènement</h2>
        <input type="text" placeholder="Nom de l'évènement" />
      </div>
      <div className="create-event__date">
        <h2>Date de l'évènement</h2>
        <input type="text" placeholder="JJ/MM/AAAA" />
      </div>
      <div className="create-event__description">
        <h2>Description</h2>
        <input type="text" placeholder="Description" />
      </div>
      <div className="create-event__participants">
        <h2>Participants</h2>
        <input
          className="create-event__participants__input-name1"
          type="text"
          placeholder="Nom du participant 1"
        />
        <input
          className="create-event__participants__input-email1"
          type="text"
          placeholder="E-mail du participant 1"
        />
        <input
          className="create-event__participants__input-name2"
          type="text"
          placeholder="Nom du participant 2"
        />
        <input
          className="create-event__participants__input-email2"
          type="text"
          placeholder="E-mail du participant 2"
        />
        <button>
          Ajouter un participant <span>+</span>
        </button>
      </div>
      <div className="create-event__budget">
        <h2>Budget</h2>
        <input type="text" placeholder="Somme maximum" />
      </div>
    </div>
  );
}

export default CreateEvent;
