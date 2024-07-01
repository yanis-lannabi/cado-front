import logo from '../../assets/logo.svg';

import './HomePage.scss';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/components/HomePage/HomePage.tsx</code> and save to
          reload.
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
