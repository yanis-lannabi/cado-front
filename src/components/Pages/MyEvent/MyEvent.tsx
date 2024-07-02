import './MyEvent.scss';
// import Header from '../../Elements/Header/Header';
// import Footer from '../../Elements/Footer/Footer';

function MyEvent() {
  return (
    <div className="WebsiteName">
      <header className="Website__Title">
        <h1>Mes évènements</h1>
      </header>
      <div className="MyEvent">
        <p>Evenements 1</p>
        <p>Evenements 2</p>
        <p>Evenements 3</p>
        <p>Evenements 4</p>

        <h2>Nouvel évènements</h2>
        <button className="MyEvent-confirmation" type="submit">
          Créer un nouvel évènement
        </button>
      </div>
    </div>
  );
}

export default MyEvent;
