import './MyEvent.scss';
<<<<<<< HEAD
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

        <h2>Nouvel évènement</h2>
        <button className="MyEvent__confirmation" type="submit">
          Créer un évènement
        </button>
      </div>
=======
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

function MyEvent() {
  return (
    <div className="MyEvent">
      <Header />
      <header className="MyEvent-header">
        <h1>Mes évènements</h1>
      </header>

      <p>Evenements 1</p>
      <p>Evenements 2</p>
      <p>Evenements 3</p>
      <p>Evenements 4</p>

      <h2>Nouvel évènements</h2>
      <button>Créer un nouvel évènement</button>
      <Footer />
>>>>>>> parent of cf1c317... update feature/faq2
    </div>
  );
}

export default MyEvent;
