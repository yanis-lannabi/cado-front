import './DrawResult.scss';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';
function DrawResult() {
  return (
    <div className="draw-result-page">
      <Header />
      <h2>Bienvenue (prénom) !</h2>
      <p> La personne à qui tu devras offrir un cadeau est...</p>
      <button className="draw-button"> Clique ici !</button>
      <p className="draw-result"> Shakira </p>
      <a className="event-link" href="">
        {' '}
        Voir le détail de l'évènement{' '}
      </a>
      <Footer />
    </div>
  );
}

export default DrawResult;
