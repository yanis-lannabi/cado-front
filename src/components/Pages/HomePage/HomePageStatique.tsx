import logo from '../../../assets/MainLogo.png';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
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
      <Footer />
    </div>
  );
}

export default HomePage;
