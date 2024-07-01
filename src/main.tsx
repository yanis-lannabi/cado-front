import React from 'react';
import ReactDOM from 'react-dom/client';

import MyAccount from './components/Pages/MyAccount/MyAccount';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyAccount />
  </React.StrictMode>
);
