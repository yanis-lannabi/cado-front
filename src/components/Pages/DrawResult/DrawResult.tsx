import { useState } from 'react';
import './DrawResult.scss';

// fictive list of participants to test the feature
const participants = ['Shakira', 'Beyoncé', 'Babar', 'Neymar'];

function DrawResult() {
  const [result, setResult] = useState('');

  const handleDraw = () => {
    const randomIndex = Math.floor(Math.random() * participants.length);
    setResult(participants[randomIndex]);
  };

  return (
    <div className="draw-result-page">
      <h2>Bienvenue (prénom) !</h2>
      <p> La personne à qui tu devras offrir un cadeau est...</p>
      <button className="draw-button" onClick={handleDraw}>
        {' '}
        Clique ici !
      </button>
      {result && <p className="draw-result"> {result} </p>}
      <a className="event-link" href="/details-evenement">
        Voir le détail de l'évènement
      </a>
    </div>
  );
}

export default DrawResult;
