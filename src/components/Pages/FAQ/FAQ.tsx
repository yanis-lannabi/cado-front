import './FAQ.scss';

function FAQ() {
  return (
    <article className="FAQ">
      <h2 className="FAQ-title">FAQ</h2>
      <div className="FAQ-category"></div>
      <p className="FAQ-content">
      <h3> Qu'est-ce que Secret Santa?</h3>

      Secret Santa est un organisateur d'échange des cadeaux gratuit en ligne! 
      Organisez une Secret Santa party avec des amis, de la famille ou même entre collègues. 
      Chaque année, autour de la période de des fêtes, les personnes du monde entier s'échangent des cadeaux. 
      Pour garder les choses intéressantes, vous pouvez aassocier une personne à une autre au hasard, afin de s'offrir des cadeaux.

      <h3>Comment puis-je gérer mon événement Secret Santa et les participants?</h3>
      
      L'e-mail de confirmation qui a été envoyé à l'administrateur contient un lien vers une page permettant de gérer l'événement et la liste associe à cet événement.
      </p>
    </article>
  );
}

export default FAQ;