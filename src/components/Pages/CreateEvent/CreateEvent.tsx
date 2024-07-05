import { useState } from 'react';
import './CreateEvent.scss';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [participants, setParticipants] = useState([{ name: '', email: '' }]);
  const [giftBudget, setGiftBudget] = useState('');

  const handleAddParticipant = () => {
    setParticipants([...participants, { name: '', email: '' }]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (
        !eventName ||
        !eventDate ||
        participants.some(
          (participant) => !participant.name || !participant.email
        )
      ) {
        throw new Error('Veuillez remplir tous les champs obligatoires');
      } else {
        const response = await fetch('http://165.227.232.51:3000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eventName,
            eventDate,
            eventDescription,
            participants,
            giftBudget,
          }),
        });

        if (!response.ok) {
          throw new Error("Erreur lors de la création de l'événement");
        }

        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-event-page">
      <Header />

      <h2>Créer mon évènement</h2>

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
            {participants.map((participant, i) => (
              <div key={i} className="create-event__participant">
                <input
                  type="text"
                  placeholder="Nom du participant"
                  value={participant.name}
                  onChange={(e) => {
                    const newParticipants = [...participants];
                    newParticipants[i].name = e.target.value;
                    setParticipants(newParticipants);
                  }}
                />
                <input
                  type="email"
                  placeholder="E-mail du participant"
                  value={participant.email}
                  onChange={(e) => {
                    const newParticipants = [...participants];
                    newParticipants[i].email = e.target.value;
                    setParticipants(newParticipants);
                  }}
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

      <Footer />
    </div>
  );
}

export default CreateEvent;
