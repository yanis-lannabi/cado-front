import React from 'react';
import ReactDOM from 'react-dom/client';

import HomePage from './components/Pages/HomePage/HomePage';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
