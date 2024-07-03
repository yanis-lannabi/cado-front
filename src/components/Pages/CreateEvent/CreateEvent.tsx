import { useState } from 'react';
import './CreateEvent.scss';

// Fictive participants list, in order to test the form
const participants = [
  {
    name: 'Bob',
    email: 'bobby@bobby.fr',
  },
  {
    name: 'Michel',
    email: 'michou@michel.fr',
  },
  {
    name: 'Roberto',
    email: 'Rob@roberto.fr',
  },
  {
    name: 'Mcikey',
    email: 'mickey@mickey.fr',
  },
  {
    name: 'Shakira',
    email: 'shaki@shaki.fr',
  },
];

function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [participant, setParticipant] = useState([]);
  const [giftBudget, setGiftBudget] = useState('');

  const addParticipantLine = (e) => {
    e.preventDefault();
    return (
      <div className="create-event__element">
        <input type="text" id="participant" placeholder="Participant" />
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eventName && !eventDate && !participant) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    alert(`Youhou ! Votre évènement "${eventName}" a bien été créé ! :)`);

    setEventName('');
    setEventDate('');
    setEventDescription('');
    setParticipant([]);
    setGiftBudget('');
  };

  return (
    <div className="create-event-page">
      <h2>Créer mon évènement</h2>

      <form className="create-event">
        <div className="create-event__element">
          <h3>* Nom de l'évènement :</h3>
          <input
            type="text"
            id="eventName"
            value={eventName}
            placeholder="Nom de l'évènement"
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <div className="create-event__element">
          <h3>* Date de l'évènement :</h3>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="create-event__element">
          <h3>Description :</h3>
          <input
            type="text"
            id="eventDescription"
            value={eventDescription}
            placeholder="Description de l'évènement"
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </div>
        <div className="create-event__element">
          <h3>* Participants :</h3>

          <div className="create-event__participants">
            <div className="create-event__participant">
              <input
                type="text"
                id="participantName"
                placeholder="Nom du participant"
              />
              <input
                type="email"
                id="participantEmail"
                placeholder="E-mail du participant"
              />
            </div>

            <button
              className="create-event__participants__add-button"
              onClick={addParticipantLine}
            >
              +
            </button>
          </div>
        </div>
        <div className="create-event__element">
          <h3>Budget :</h3>
          <input
            type="number"
            id="giftBudget"
            value={giftBudget}
            placeholder="Budget maximum par cadeau"
          />
        </div>

        <p className="create-event__mandatory-fields">
          * Les champs avec une astérisque sont obligatoires
        </p>

        <button
          type="submit"
          className="create-event__validation-button"
          onSubmit={handleSubmit}
        >
          Valider
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
