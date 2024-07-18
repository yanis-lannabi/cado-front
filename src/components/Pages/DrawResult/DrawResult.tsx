import { useState, useEffect } from 'react';
import './DrawResult.scss';

// fictive list of participants to test the feature
const participants = ['Shakira', 'Beyoncé', 'Babar', 'Neymar', 'Pikachu'];

// preparing the code for when the draw API is ready
// interface Participant {
//   participantName: string;
// }

interface Event {
  eventName: string;
  eventDate: string;
}

function DrawResult() {
  // states specific to the drawing
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  //states specific to the event
  const [event, setEvent] = useState<Event | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDraw = (e) => {
    e.preventDefault();

    // once the button is clicked, we disable it so that the user can not click again
    setIsButtonClicked(true);
    setIsButtonDisabled(true);

    let index = 0;

    const intervalId = setInterval(() => {
      setCurrentIndex(index);
      index = (index + 1) % participants.length;
    }, 50);

    setTimeout(() => {
      clearInterval(intervalId);

      const randomIndex = Math.floor(Math.random() * participants.length);
      setCurrentIndex(randomIndex);
    }, 2000);
  };

  // preparing the code for when the draw API is ready
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Effectue la requête API et met à jour l'état de l'événement avec les données reçues
  //       const response = await fetch('https://cado.zapto.org/create-event');
  //       const data = await response.json();
  //       setEvent(data);
  //     } catch (error) {
  //       // En cas d'erreur, met à jour l'état de l'erreur avec un message d'erreur
  //       setError(
  //         'Nous sommes désolés, une erreur est survenue lors du chargement des données.'
  //       );
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (error) {
  //   return <div className="draw-result__error-message">{error}</div>;
  // }

  // // if data is not loaded yet, return "Loading..."
  // if (!event) {
  //   return <div className="draw-result__loading-message">Loading...</div>;
  // }

  return (
    <div className="draw-result-page">
      <h1 className="draw-result__title">Bienvenue (prénom) !</h1>

      <p className="draw-text">
        {' '}
        La personne à qui tu devras offrir un cadeau est...
      </p>
      <button
        className="draw-button"
        onClick={handleDraw}
        disabled={isButtonDisabled}
      >
        Clique ici !
      </button>
      <div className="draw-roulette">
        {!isButtonClicked ? (
          <p className="placeholder">?</p>
        ) : participants[currentIndex] ? (
          <p className="result"> {participants[currentIndex]} </p>
        ) : null}
      </div>

      <a className="event-link" href="/details-evenement">
        Voir le détail de l'évènement
      </a>
    </div>
  );
}

export default DrawResult;
