import './MyEvent.scss';
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
    </div>
  );
}

export default MyEvent;
