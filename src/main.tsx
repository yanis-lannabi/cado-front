import React from 'react';
import ReactDOM from 'react-dom/client';

import CreateEvent from './components/Pages/CreateEvent/CreateEvent';
import Header from './components/Elements/Header/Header';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <CreateEvent />
  </React.StrictMode>
);
