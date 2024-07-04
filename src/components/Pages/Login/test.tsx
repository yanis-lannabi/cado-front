import './Login.scss';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [zipcode, setzipcode] = useState('');
  // Initializes the errors state with an empty string.
  const [emailError, setEmailError] = useState('');
  const [zipcodeError, setzipcodeError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/s-inscrire');
  };

  useEffect(() => {
    if (email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Veuillez entrer un email valide.');
    } else {
      setEmailError('');
    }

    if (zipcode && zipcode.length < 7) {
      setzipcodeError('Le mot de passe doit être supérieur à 7 caractères');
    } else {
      setzipcodeError('Entrez un mot de passe');
    }
  }, [email, zipcode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (emailError || zipcodeError) {
      return;
    }
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, zipcode }),
        }
      );

      if (!response.ok) {
        // If the status if different from 200, it means that an error occured.
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la connexion');
      }
      // Redirigez l'utilisateur vers la page "Mon compte"
      navigate('/mon-compte');
    } catch (error) {
      if (error instanceof Error) {
        // Si une erreur se produit lors de l'envoi de la requête,
        setErrorMessage(error.message);
        console.error(error);
      }
    }
  };

  return (
    <div className="WebsiteName">
      <Header />
      <header className="Website__Title">
        <h1>Cad'O</h1>
      </header>
      <div className="Login">
        <h2>Connectez-vous à votre compte</h2>
        {errorMessage && (
          <div className="Login__errorMessage">{errorMessage}</div>
        )}
        {emailError && <div className="Login__emailError">{emailError}</div>}
        {zipcodeError && (
          <div className="Login__zipcodeError">{zipcodeError}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="Login__email">
            <input
              type="email"
              placeholder="email"
              value={email}
              //Updates the email state with the user's input.
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="Login__zipcode">
            <input
              type="zipcode"
              placeholder="zipcode"
              value={zipcode}
              //Updates the zipcode state with the user's input.
              onChange={(e) => setzipcode(e.target.value)}
              required
            />
          </div>
          <button className="Login__confirmation" type="submit">
            Continuer
          </button>
        </form>
        <p className="Login__newAccount">
          ------Pas de compte, Créez-en un------
        </p>
        <button className="Login__createAccount" onClick={handleCreateAccount}>
          Créer un compte
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
