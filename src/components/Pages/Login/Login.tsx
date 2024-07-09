// Importing styles specific to this component
import './Login.scss';
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
  }, [email]);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // If there are errors, stop execution
    if (emailError) {
      return;
    }
    try {
      // Attempt to log in by sending a POST request to the API
      const response = await fetch('http://165.227.232.51:3000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log(JSON.stringify({ email, password }));

      if (!response.ok) {
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          console.log(errorData);
        } else {
          console.log(await response.text());
        }
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // handle your data

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
