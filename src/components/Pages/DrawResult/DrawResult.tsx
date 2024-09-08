import { useState, useEffect } from 'react';
import './DrawResult.scss';
import axios from 'axios';

// Fictive list of participants to test the feature
const initialParticipants = [
  'Shakira',
  'Beyoncé',
  'Babar',
  'Neymar',
  'Pikachu',
];

function DrawResult() {
  // States specific to the drawing
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [receiver, setReceiver] = useState('');
  const [participants, setParticipants] = useState(initialParticipants);

  useEffect(() => {
    // Fetch the receiver data from the API
    axios
      .get('https://cado.zapto.org/resultat/:token')
      .then((response) => {
        const fetchedReceiver = response.data;
        setReceiver(fetchedReceiver);
        // Add the receiver to the participants list if not already present
        if (!participants.includes(fetchedReceiver)) {
          setParticipants([...participants, fetchedReceiver]);
        }
      })
      .catch((error) => {
        console.error('Error fetching receiver:', error);
      });
  }, []); // Empty dependency array to run only once when the component mounts

  const handleDraw = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Once the button is clicked, we remove it so that the user cannot click again
    setIsButtonClicked(true);

    let index = 0;

    const intervalId = setInterval(() => {
      setCurrentIndex(index);
      index = (index + 1) % participants.length;
    }, 50);

    setTimeout(() => {
      clearInterval(intervalId);

      // Ensure the final result is the receiver
      const receiverIndex = participants.indexOf(receiver);
      setCurrentIndex(receiverIndex);
    }, 2000);
  };

  return (
    <div className="draw-result-page">
      <h1 className="draw-result__title">Bienvenue (prénom) !</h1>
      {/* For when the API is ready */}
      {/* <h1 className="draw-result__title">Bienvenue {giver.name} !</h1> */}

      <p className="draw-text">
        Tu es invité(e) à participer à l'évènement (Nom de l'évènement), le
        (JJ/MM/AAAA).
      </p>

      <p className="draw-text">
        La personne à qui tu devras offrir un cadeau est...
      </p>
      <p>
        {!isButtonClicked ? (
          <button type="button" className="draw-button" onClick={handleDraw}>
            Clique ici !
          </button>
        ) : (
          ''
        )}
      </p>
      <div className="draw-roulette">
        {!isButtonClicked ? (
          <p className="placeholder">?</p>
        ) : (
          <p className="result"> {receiver} </p>
        )}
      </div>
    </div>
  );
}

export default DrawResult;
