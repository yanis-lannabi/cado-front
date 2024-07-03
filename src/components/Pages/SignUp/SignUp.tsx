/* eslint-disable no-console */
import './SignUp.scss';
import React, { useState } from 'react';
// import Header from '../../Elements/Header/Header';
// import Footer from '../../Elements/Footer/Footer';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Perform signup logic here
    // You can make an API call here to submit the form data to the server
    // For example:
    // fetch('/api/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle the response from the server
    // })
    // .catch(error => {
    //   // Handle any errors that occur during the API call
    // });
  };

  return (
    <div className="WebsiteName">
      <header className="Website__title">
        <h1>Organisez rapidement vos évènements</h1>
      </header>
      <div className="SignUp">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom:</label>
          <input
            className="SignUp__name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            className="SignUp__email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            className="SignUp__password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="SignUp__confirmation" type="submit">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
