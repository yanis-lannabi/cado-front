/* eslint-disable no-console */
import './SignUp.scss';
import React, { useState } from 'react';
// import Header from '../../Elements/Header/Header';
// import Footer from '../../Elements/Footer/Footer';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpStatus, setSignUpStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // API call
    // 'http://http://165.227.232.51:3000/register/' API ROUTE
    fetch('http://localhost:3000/register/', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.name && data.email && data.password) {
          setSignUpStatus('Inscription réussie !');
          setName('');
          setEmail('');
          setPassword('');
        } else {
          setSignUpStatus("Échec de l'inscription : Données manquantes");
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        setSignUpStatus("Échec de l'inscription : une erreur est survenue");
        setName('');
        setEmail('');
        setPassword('');
      });
  };

  return (
    <div className="WebsiteName">
      <header className="Website__title">
        <h1>Organisez rapidement vos évènements</h1>
      </header>
      <div className="SignUp">
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom:</label>
          <input
            className="SignUp__name"
            type="text"
            id="name"
            placeholder="Entrez votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            className="SignUp__email"
            type="email"
            id="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Mot de passe:</label>
          <input
            className="SignUp__password"
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {signUpStatus && <p>{signUpStatus}</p>}

          <button className="SignUp__confirmation" type="submit">
            S&apos;inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
