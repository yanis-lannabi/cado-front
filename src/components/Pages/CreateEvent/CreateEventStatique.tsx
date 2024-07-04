import './CreateEvent.scss';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

function CreateEvent() {
  return (
    <div className="create-event-page">
      <Header />
      <h2>Créer mon évènement</h2>

      <form className="create-event">
        <div className="create-event__element">
          <h3>Nom de l'évènement :</h3>
          <input type="text" placeholder="Nom de l'évènement" />
        </div>
        <div className="create-event__element">
          <h3>Date de l'évènement :</h3>
          <input type="text" placeholder="JJ/MM/AAAA" />
        </div>
        <div className="create-event__element">
          <h3>Description :</h3>
          <input type="text" placeholder="Description" />
        </div>
        <div className="create-event__element">
          <h3>Participants :</h3>

          <div className="create-event__participants">
            <div className="create-event__participant">
              <input
                className="create-event__participant__input-name"
                type="text"
                placeholder="Nom du participant"
              />
              <input
                className="create-event__participant__input-email"
                type="text"
                placeholder="E-mail du participant"
              />
            </div>
            <div className="create-event__participant">
              <input
                className="create-event__participant__input-name"
                type="text"
                placeholder="Nom du participant"
              />
              <input
                className="create-event__participant__input-email"
                type="text"
                placeholder="E-mail du participant"
              />
            </div>
            <button className="create-event__participants__add-button">
              +
            </button>
          </div>
        </div>
        <div className="create-event__element">
          <h3>Budget :</h3>
          <input type="text" placeholder="Budget maximum par cadeau" />
        </div>

        <button className="create-event__validation-button">Valider</button>
      </form>
      <Footer />
    </div>
  );
}

export default CreateEvent;
