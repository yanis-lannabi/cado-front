// Importing necessary libraries and components
import React, { useEffect, useState } from 'react';
import './MyAccount.scss';
import { Link } from 'react-router-dom';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';
// src/components/Pages/MyAccount/MyAccount.tsx

// src/components/Pages/MyAccount/MyAccount.tsx

import { useAuth } from '../../../Hooks/useAuth';

const MyAccount = () => {
  const { authData } = useAuth();

  if (!authData || !authData.user) {
    return <div>Veuillez vous connecter.</div>;
  }

  return (
    <div>
      <h1>Mon Compte</h1>
      <p>
        <strong>Nom:</strong> {authData.user.name}
      </p>
      <p>
        <strong>Email:</strong> {authData.user.email}
      </p>
      <p>
        <strong>ID:</strong> {authData.user.id}
      </p>
    </div>
  );
};

export default MyAccount;
