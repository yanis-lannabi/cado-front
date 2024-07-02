import './MyEvent.scss';

function MyEvent() {
  return (
    <div className="MyEvent">
      <header className="MyEvent-header">
        <h1>Mes évènements</h1>
      </header>

      <p>Evenements 1</p>
      <p>Evenements 2</p>
      <p>Evenements 3</p>
      <p>Evenements 4</p>

      <h2>Nouvel évènements</h2>
      <button className="MyEvent-confirmation" type="submit">
        Créer un nouvel évènement
      </button>
    </div>
  );
}

export default MyEvent;
