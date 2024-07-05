import homeImage from '../../../../public/FavIcon.png';
import { Link } from 'react-router-dom';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

import './HomePage.scss';

function HomePage() {
  return (
    <div className="home">
      <Header />
      <h1 className="home__title">Bienvenue sur Cad'O</h1>

      <div className="home__container">
        <div className="home__concept-explaination">
          <h2>Mais qu'est-ce que Cad'O ?</h2>
          <p>
            Le concept du Secret Santa est un moyen de s’offrir des cadeaux de
            façon anonyme : à l’aide d’un tirage au sort, chaque participant se
            voit attribuer par tirage au sort une personne à qui il offrira un
            cadeau. La personne qui reçoit le cadeau ne connaît pas l’identité
            de celui qui lui offre.
            <br />
            <br />
            Chez Cad'O, nous avons créé et mis à dispositin un outil qui vous
            permettra de faciliter l'organisation de vos Secret Santas !
          </p>
          <h3> Créez votre évènement dès maintenant !</h3>
          <button className="account-creation-button">
            <Link to="/se-connecter">Créer mon compte</Link>
          </button>
        </div>
        <img className="home__image" src={homeImage} alt="" />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
