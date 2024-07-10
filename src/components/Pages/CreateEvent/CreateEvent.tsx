import { useState } from 'react';
import axios from 'axios';
import './CreateEvent.scss';
import { useAuth } from '../../../Hooks/useAuth';

function CreateEvent() {
  const { authData } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [participants, setParticipants] = useState([{ name: '', email: '' }]);

  const handleAddParticipant = () => {
    setParticipants([...participants, { name: '', email: '' }]);
  };

  const formattedDate = (date) => {
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const API = 'http://localhost:3000/create-event';
    const organizerId = authData?.user.id;
    try {
      const eventResponse = await axios.post(API, {
        name,
        date,
        organizer_id: organizerId,
        participants,
      });

      // for (const participant of participants) {
      //   const participantData = {
      //     name: participant.name,
      //     email: participant.email,
      //   };

      // const userResponse = await axios.post(usersAPI, participantData);
      console.log(eventResponse.data);
    } catch (error) {
      setErrorMessage(
        "Une erreur est survenue lors de la création de l'évènement"
      );
    }
  };

  return (
    <div className="create-event-page">
      <h2>Créer mon évènement</h2>

      <form className="create-event" onSubmit={handleSubmit}>
        <div className="create-event__element">
          <label htmlFor="eventName" className="create-event__element-title">
            * Nom de l'évènement :
          </label>
          <input
            type="text"
            id="eventName"
            value={name}
            placeholder="Nom de l'évènement"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="create-event__element">
          <label htmlFor="eventDate" className="create-event__element-title">
            * Date de l'évènement :
          </label>
          <input
            type="date"
            id="eventDate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
