import './LegalNotices.scss';

function LegalNotices() {
  return (
    <article className="LegalNotices">
      <h3 className="LegalNotices-title">Mention légales:</h3>
      <h5 className="LegalNotices-date">En vigueur au 19/07/2024</h5>
      <p className="LegalNotices-preface">
        Conformément aux dispositions des Articles 6-III et 19 de la Loi
        n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique,
        dite L.C.E.N., il est porté à la connaissance des utilisateurs et
        visiteurs, ci-après l'"Utilisateur", du site Cad'O , ci-après le "Site",
        les présentes mentions légales. La connexion et la navigation sur le
        Site par l’Utilisateur implique acceptation intégrale et sans réserve
        des présentes mentions légales. Ces dernières sont accessibles sur le
        Site à la rubrique « Mentions légales ».
      </p>
      <div className="LegalNotices-content" />
      <h3>ARTICLE 1 - L'EDITEUR</h3>
      <p className="LegalNotices-editor">
        L’édition et la direction de la publication du Site est assurée par X
        XX, domiciliée _______________, dont le numéro de téléphone est
        _______________, et l'adresse e-mail _______________. ci-après
        l'"Editeur".
      </p>
      <h3>ARTICLE 2 - L'HEBERGEUR</h3>
      <p className="LegalNotices-host">
        L'hébergeur du Site est la société XXX, dont le siège social est situé
        au XXX , avec le numéro de téléphone : _______________ + adresse mail de
        contact
      </p>
      <h3>ARTICLE 3 - ACCES AU SITE</h3>
      <p className="LegalNotices-websiteAccess">
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d’une
        nécessité de maintenance. En cas de modification, interruption ou
        suspension du Site, l'Editeur ne saurait être tenu responsable.
      </p>
      <h3>ARTICLE 4 - COLLECTE DES DONNEES</h3>
      <p className="LegalNotices-CollectData">
        Le Site assure à l'Utilisateur une collecte et un traitement
        d'informations personnelles dans le respect de la vie privée
        conformément à la loi n°78-17 du 6 janvier 1978 relative à
        l'informatique, aux fichiers et aux libertés. En vertu de la loi
        Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur
        dispose d'un droit d'accès, de rectification, de suppression et
        d'opposition de ses données personnelles. L'Utilisateur exerce ce droit
        · via son espace personnel ; Toute utilisation, reproduction, diffusion,
        commercialisation, modification de toute ou partie du Site, sans
        autorisation de l’Editeur est prohibée et pourra entraîner des actions
        et poursuites judiciaires telles que notamment prévues par le Code de la
        propriété intellectuelle et le Code civil.
      </p>
    </article>
  );
}

export default LegalNotices;
