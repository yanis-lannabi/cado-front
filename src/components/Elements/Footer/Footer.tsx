import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'; // Importez votre fichier SCSS

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div>
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      <div>Version du site</div>
    </footer>
  );
};

export default Footer;
