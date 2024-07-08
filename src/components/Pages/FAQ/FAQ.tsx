import './FAQ.scss';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

const FAQ: React.FC = () => {
  return (
    <article className="FAQ">
      <Header />
      <h2 className="FAQ-title">FOIRE AUX QUESTIONS :</h2>
      <div className="FAQ-category">
        <h3> Qu'est-ce que Secret Santa?</h3>
        <p className="FAQ-content">
          Secret Santa est un organisateur d'échange des cadeaux gratuit en
          ligne! Organisez une Secret Santa party avec des amis, de la famille
          ou même entre collègues. Chaque année, autour de la période de des
          fêtes, les personnes du monde entier s'échangent des cadeaux. Pour
          Pour garder les choses intéressantes, vous pouvez associer une
          personne à une autre au hasard, afin de s'offrir des cadeaux.
        </p>
        <h3>
          Comment puis-je gérer mon évènement Secret Santa et les participants?
        </h3>
        <p className="FAQ-content">
          L'e-mail de confirmation qui a été envoyé à l'administrateur contient
          un lien vers une page permettant de gérer l'événement et la liste
          associe à cet événement.
        </p>
        <h3> Puis-je fournir une liste de souhaits?</h3>
        <p className="FAQ-content">
          Les participants recevront un lien vers une page où ils peuvent
          découvrir la personne qui leur a été attribuée et a qu'ils doivent
          offrir un cadeau. Ils peuvent également ajouter leur propre liste de
          souhaits et voir celle de la personne qui leur a été attribuée.
        </p>
        <h3> Puis-je supprimer ma liste?</h3>
        <p className="FAQ-content">
          Bien sûr que vous pouvez. Rendez-vous sur la page de gestion de votre
          événement, en utilisant le bouton supprimer. Toutes les données liées
          à votre liste seront supprimées de notre système.
        </p>
      </div>
      <p className="imageFAQ">IMAGE A AJOUTER</p>
      <Footer />
    </article>
  );
};

export default FAQ;
