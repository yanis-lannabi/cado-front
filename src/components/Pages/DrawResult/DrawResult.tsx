import { useState } from 'react';
import './DrawResult.scss';

import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

// fictive list of participants to test the feature
const participants = ['Shakira', 'Beyoncé', 'Babar', 'Neymar', 'Pikachu'];

function DrawResult() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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

  return (
    <div className="draw-result-page">
      <Header />

      <h1>Bienvenue (prénom) !</h1>

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
      <Footer />
    </div>
  );
}

export default DrawResult;
