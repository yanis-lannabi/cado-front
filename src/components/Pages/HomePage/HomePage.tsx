import homeImage from '../../../../public/FavIcon.png';

import './HomePage.scss';

function HomePage() {
  return (
    <div className="home">
      <h2 className="home__title">Bienvenue chez Cad'O</h2>

      <div className="home__container">
        <div className="home__concept-explaination">
          <h3>Mais qu'est-ce que Cad'O ?</h3>
          <p>
            Le concept du Secret Santa est un moyen de s’offrir des cadeaux de
            façon anonyme : à l’aide d’un tirage au sort, chaque participant se
            voit attribuer par tirage au sort une personne à qui il offrira un
            cadeau. La personne qui reçoit le cadeau ne connaît pas l’identité
            de celui qui lui offre.
            <br />
            <br />
            Avec Cad'O, nous avons donc créé un outil qui permettra de faciliter
            l'organisation de vos Secret Santa !
          </p>
        </div>
        <img className="home__image" src={homeImage} alt="" />
      </div>
    </div>
  );
}

export default HomePage;
