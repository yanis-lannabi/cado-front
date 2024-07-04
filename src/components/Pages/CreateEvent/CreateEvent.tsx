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
  const [participant, setParticipant] = useState([{ name: '', email: '' }]);
  const [giftBudget, setGiftBudget] = useState('');

  // const handleAddParticipant = (e) => {
  //   e.preventDefault();

  //   return (
  //     <div className="create-event__participant">
  //       <input
  //         type="text"
  //         id="participantName"
  //         placeholder="Nom du participant"
  //       />
  //       <input
  //         type="email"
  //         id="participantEmail"
  //         placeholder="E-mail du participant"
  //       />
  //     </div>
  //   );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eventName || !eventDate || !participant) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    } else {
      console.log(
        eventName,
        eventDate,
        eventDescription,
        participant,
        giftBudget
      );
    }

    setEventName('');
    setEventDate('');
    setEventDescription('');
    setParticipant([{ name: '', email: '' }]);
    setGiftBudget('');
  };

  return (
    <div className="create-event-page">
      <h1>Créer mon évènement</h1>

      <form className="create-event" onSubmit={handleSubmit}>
        <div className="create-event__element">
          <label htmlFor="eventName">* Nom de l'évènement :</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            placeholder="Nom de l'évènement"
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <div className="create-event__element">
          <label htmlFor="eventDate">* Date de l'évènement :</label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="create-event__element">
          <label htmlFor="eventDescription">Description :</label>
          <input
            type="text"
            id="eventDescription"
            value={eventDescription}
            placeholder="Description de l'évènement"
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </div>
        <div className="create-event__element">
          <label htmlFor="participants">* Participants :</label>

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

            <input
              type="button"
              value="+"
              className="create-event__participants__add-button"
              // onClick={handleAddParticipant}
            />
          </div>
        </div>
        <div className="create-event__element">
          <label htmlFor="giftBudget">Budget (en euros) :</label>
          <input
            type="number"
            id="giftBudget"
            value={giftBudget}
            placeholder="Budget maximum par cadeau"
            onChange={(e) => setGiftBudget(e.target.value)}
          />
        </div>

        <p className="create-event__mandatory-fields">
          * Les champs avec une astérisque sont obligatoires
        </p>

        <input
          type="submit"
          className="create-event__validation-button"
          value="Valider"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}

export default CreateEvent;
