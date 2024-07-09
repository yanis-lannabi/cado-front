import './EventDetails.scss';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

function EventDetails() {
  return (
    <div className="event-details-page">
      <Header />
      <button className="myevents-button"> Tous mes évènements</button>
      <h1 className="event-details__title">Nom de l'évènement</h1>

      <form className="event-details">
        <div className="event-details__element">
          <h3>Nom de l'évènement :</h3>
          <input type="text" placeholder="Nom de l'évènement" />
        </div>
        <div className="event-details__element">
          <h3>Date de l'évènement :</h3>
          <input type="text" placeholder="JJ/MM/AAAA" />
        </div>
        <div className="event-details__element">
          <h3>Description :</h3>
          <input type="text" placeholder="Description" />
        </div>
        <div className="event-details__element">
          <h3>Participants :</h3>

          <div className="event-details__participants">
            <div className="event-details__participant">
              <input
                className="event-details__participant__input-name"
                type="text"
                placeholder="Nom du participant"
              />
              <input
                className="event-details__participant__input-email"
                type="text"
                placeholder="E-mail du participant"
              />
            </div>
            <div className="event-details__participant">
              <input
                className="event-details__participant__input-name"
                type="text"
                placeholder="Nom du participant"
              />
              <input
                className="event-details__participant__input-email"
                type="text"
                placeholder="E-mail du participant"
              />
            </div>
            <button className="event-details__participants__add-button">
              +
            </button>
          </div>
        </div>
        <div className="event-details__element">
          <h3>Budget :</h3>
          <input type="text" placeholder="Budget maximum par cadeau" />
        </div>

        <div className="event-details__buttons-container">
          <button className="event-details__save-button">
            Enregistrer les modifications
          </button>
          <button className="event-details__delete-button">
            Supprimer l'évènement
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default EventDetails;
