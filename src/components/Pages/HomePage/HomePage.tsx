import homeImage from '../../../../public/FavIcon.png';

import './HomePage.scss';

function HomePage() {
  return (
    <div className="home">
      <h1 className="hometitle">Bienvenue sur Cad'O</h1>

      <div className="homecontainer">
        <div className="homeconcept-explaination">
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
          <button className="account-creation-button"> Créer mon compte</button>
        </div>
        <img className="homeimage" src={homeImage} alt="" />
      </div>
    </div>
  );
}

export default HomePage;
