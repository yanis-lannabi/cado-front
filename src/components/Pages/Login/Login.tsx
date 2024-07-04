// Importing styles specific to this component
import './Login.scss';
//import './LoginTEST.scss';
// Importing Header and Footer components
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

// Importing necessary hooks from react-router-dom and React
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Defining the Login component
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Initializing states for email, password, and errors
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // Initializing the useNavigate hook for page navigation
  const navigate = useNavigate();
  // Function to handle account creation, which redirects to the registration page
  const handleCreateAccount = () => {
    navigate('/s-inscrire');
  };
  // Using the useEffect hook to validate email and password on each change
  useEffect(() => {
    // Checking the validity of the email
    if (email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Veuillez entrer un email valide.');
    } else {
      setEmailError('');
    }
    // Checking the length of the password
    if (password && password.length < 7) {
      setPasswordError('Le mot de passe doit être supérieur à 7 caractères');
    } else {
      setPasswordError('Entrez un mot de passe');
    }
  }, [email, password]);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // If there are errors, stop execution
    if (emailError || passwordError) {
      return;
    }
    try {
      // Attempt to log in by sending a POST request to the API
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // If the response is not OK, throw an error
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la connexion');
      }
      // If everything goes well, redirect to the account page
      navigate('/mon-compte');
    } catch (error) {
      if (error instanceof Error) {
        // If an error occurs, display it
        setErrorMessage(error.message);
        console.error(error);
      }
    }
  };

  // Component rendering
  return (
    <div className="WebsiteName">
      <Header />
      <div className="Login">
        <h2>Connectez-vous à votre compte</h2>
        {errorMessage && (
          <div className="Login__errorMessage">{errorMessage}</div>
        )}
        {emailError && <div className="Login__emailError">{emailError}</div>}
        {passwordError && (
          <div className="Login__passwordError">{passwordError}</div>
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
          <div className="Login__password">
            <input
              type="password"
              placeholder="password"
              value={password}
              //Updates the password state with the user's input.
              onChange={(e) => setPassword(e.target.value)}
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

// Exporting the component to be able to use it elsewhere
export default Login;
