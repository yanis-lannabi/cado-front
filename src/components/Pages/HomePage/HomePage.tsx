import logo from '../../../../public/MainLogo.png';

import './App.scss';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo} className="HomePage-logo" alt="logo" />

        <p>
          Edit <code>src/components/App/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BLABLA
        </a>
      </header>
    </div>
  );
}

export default HomePage;
