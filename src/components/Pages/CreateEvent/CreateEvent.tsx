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
    const lastParticipant = participants[participants.length - 1];

    // Check if the last participant has any empty field
    if (!lastParticipant.name || !lastParticipant.email) {
      setErrorMessage(
        "Veuillez remplir tous les champs du participant avant d'en ajouter un nouveau"
      );
      return;
    }

    setParticipants([...participants, { name: '', email: '' }]);
  };

  const handleRemoveParticipant = () => {
    const newParticipant = [...participants];
    newParticipant.pop();
    setParticipants(newParticipant);
  };

  const formattedDate = (date) => {
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const API = 'http://165.227.232.51:3000/create-event';

    // the name, date and participants fields must not be empty
    if (!name || !date || !participants) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // we want to make sure the organizer is part of the drawing (and add him as the very first participant in the array)
    const organizerId = authData?.user.id;
    participants.push({
      name: authData?.user.name,
      email: authData?.user.email,
    });

    try {
      const eventResponse = await axios.post(API, {
        name,
        date,
        organizer_id: organizerId,
        participants,
      });

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

            <div className="create-event__addNremove-buttons">
              <input
                type="button"
                value="+"
                className="create-event__participants__add-button"
                onClick={handleAddParticipant}
              />
              <input
                type="button"
                value="-"
                className="create-event__participants__add-button"
                onClick={handleRemoveParticipant}
              />
            </div>
          </div>
        </div>

        <p className="create-event__mandatory-fields">
          * Les champs avec une astérisque sont obligatoires
        </p>

        <input
          type="submit"
          className="create-event__validation-button"
          value="Valider"
          // if a mandatory field is empty, the button is disabled
          disabled={
            !name || !date || participants.some((p) => !p.name || !p.email)
          }
        />
      </form>
    </div>
  );
}

export default CreateEvent;
