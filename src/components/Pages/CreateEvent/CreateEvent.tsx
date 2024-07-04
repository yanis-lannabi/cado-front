import React, { useState } from 'react';
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

  const handleParticipantChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newParticipants = [...participants];
    newParticipants[index] = {
      ...newParticipants[index],
      [field]: value,
    };
    setParticipants(newParticipants);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !eventName ||
      !eventDate ||
      participants.some((p) => !p.name || !p.email)
    ) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    } else {
      console.log(
        eventName,
        eventDate,
        eventDescription,
        participants,
        giftBudget
      );
    }

    setEventName('');
    setEventDate('');
    setEventDescription('');
    setParticipants([{ name: '', email: '' }]);
    setGiftBudget('');
  };

  return (
    <div className="create-event-page">
      <Header />
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
          {participants.map((participant, index) => (
            <div key={index} className="create-event__participant">
              <input
                type="text"
                placeholder="Nom du participant"
                value={participant.name}
                onChange={(e) =>
                  handleParticipantChange(index, 'name', e.target.value)
                }
              />
              <input
                type="email"
                placeholder="E-mail du participant"
                value={participant.email}
                onChange={(e) =>
                  handleParticipantChange(index, 'email', e.target.value)
                }
              />
            </div>
          ))}
          <button type="button" onClick={handleAddParticipant}>
            Ajouter un participant
          </button>
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
        />
      </form>
      <Footer />
    </div>
  );
}

export default CreateEvent;
