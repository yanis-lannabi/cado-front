import React from 'react';
import ReactDOM from 'react-dom/client';

import CreateEvent from './components/Pages/CreateEvent/CreateEvent';
import Header from './components/Elements/Header/Header';
import Footer from './components/Elements/Footer/Footer';

// import 'semantic-ui-css/semantic.min.css';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CreateEvent />
  </React.StrictMode>
);
