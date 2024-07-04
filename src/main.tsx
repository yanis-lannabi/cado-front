import React from 'react';
import ReactDOM from 'react-dom/client';

import MyEvent from './components/Pages/MyEvent/MyEvent';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyEvent />
  </React.StrictMode>
);
