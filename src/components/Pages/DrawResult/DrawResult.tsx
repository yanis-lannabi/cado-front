import { useState } from 'react';
import './DrawResult.scss';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function DrawResult() {
  const { token } = useParams<{ token: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [receiverName, setReceiverName] = useState<string | null>(null);
  const [participants, setParticipants] = useState<string[]>([
    'moi',
    'toi',
    'lui',
    'eux',
  ]);
  const [error, setError] = useState<string | null>(null);

  const handleDraw = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Token utilisé :', token);

    try {
      const response = await axios.get(
        `http://localhost:3000/resultat/${token}`
      );
      setData(response.data);

      console.log('Data from API:', response.data);

      // Met à jour la liste des participants avec le récepteur ajouté à la fin
      setParticipants((prevParticipants) => [
        ...prevParticipants,
        response.data.receiver,
      ]);
      setReceiverName(response.data.receiver);

      setIsButtonClicked(true);

      let index = 0;
      const intervalId = setInterval(() => {
        setCurrentIndex(index);
        index = (index + 1) % participants.length;
      }, 50);

      setTimeout(() => {
        clearInterval(intervalId);
        const randomIndex = participants.length; // Sélectionne toujours le dernier, c'est-à-dire le receveur ajouté
        setCurrentIndex(randomIndex);
      }, 2000);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        console.error(error.message);
        setError('Participant non trouvé. Vérifiez votre token.');
      } else {
        console.error('Erreur lors du chargement des résultats:', error);
        setError('Erreur lors du chargement des résultats.');
      }
    }
  };

  return (
    <div className="draw-result-page">
      <h1 className="draw-result__title">Bienvenue !</h1>
      <p className="draw-text">
        Tu es invité(e) à participer à l'évènement (Nom de l'évènement), le
        (JJ/MM/AAAA).
      </p>
      <p className="draw-text">
        La personne à qui tu devras offrir un cadeau est...
      </p>
      {!isButtonClicked && (
        <button className="draw-button" onClick={handleDraw}>
          Clique ici !
        </button>
      )}
      <div className="draw-roulette">
        {!isButtonClicked ? (
          <p className="placeholder">?</p>
        ) : (
          <>
            {console.log('currentIndex:', currentIndex)}
            {console.log('participants:', participants)}

            <p className="result">{participants[currentIndex]}</p>
          </>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default DrawResult;
