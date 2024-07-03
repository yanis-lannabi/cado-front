import './Header.scss';

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="../../../../public/MainLogo.png"
        alt="Company Logo"
      />
      <button type="submit" className="header__button">
        Connexion
      </button>
    </header>
  );
}

export default Header;
