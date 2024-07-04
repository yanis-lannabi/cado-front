import { useState } from 'react';
import './CreateEvent.scss';

// Fictive participants list, in order to test the form
// const participants = [
//   {
//     name: 'Bob',
//     email: 'bobby@bobby.fr',
//   },
//   {
//     name: 'Michel',
//     email: 'michou@michel.fr',
//   },
//   {
//     name: 'Roberto',
//     email: 'Rob@roberto.fr',
//   },
//   {
//     name: 'Mcikey',
//     email: 'mickey@mickey.fr',
//   },
//   {
//     name: 'Shakira',
//     email: 'shaki@shaki.fr',
//   },
// ];

function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [participant, setParticipant] = useState([{ name: '', email: '' }]);
  const [giftBudget, setGiftBudget] = useState('');

  const handleAddParticipant = () => {
    setParticipant([...participant, { name: '', email: '' }]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !eventName ||
      !eventDate ||
      participant.some((p) => !p.name || !p.email)
    ) {
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
          <label htmlFor="eventName" className="create-event__element-title">
            * Nom de l'évènement :
          </label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            placeholder="Nom de l'évènement"
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <div className="create-event__element">
          <label htmlFor="eventDate" className="create-event__element-title">
            * Date de l'évènement :
          </label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="create-event__element">
          <label
            htmlFor="eventDescription"
            className="create-event__element-title"
          >
            Description :
          </label>
          <input
            type="text"
            id="eventDescription"
            value={eventDescription}
            placeholder="Description de l'évènement"
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </div>
        <div className="create-event__element">
          <label htmlFor="participants" className="create-event__element-title">
            * Participants :
          </label>

          <div className="create-event__participants">
            {participant.map((p, i) => (
              <div key={i} className="create-event__participant">
                <input
                  type="text"
                  placeholder="Nom du participant"
                  value={p.name}
                  // onChange={(e) =>
                  //   handleParticipantChange(i, 'name', e.target.value)
                  // }
                />
                <input
                  type="email"
                  placeholder="E-mail du participant"
                  value={p.email}
                  // onChange={(e) =>
                  //   handleParticipantChange(i, 'email', e.target.value)
                  // }
                />
              </div>
            ))}

            <input
              type="button"
              value="+"
              className="create-event__participants__add-button"
              onClick={handleAddParticipant}
            />
          </div>
        </div>
        <div className="create-event__element ">
          <label htmlFor="giftBudget" className="create-event__element-title">
            Budget (en euros) :
          </label>
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
        />
      </form>
    </div>
  );
}

export default CreateEvent;
