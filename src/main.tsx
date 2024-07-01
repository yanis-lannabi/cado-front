import React from 'react';
import ReactDOM from 'react-dom/client';

// import HomePage from './components/Pages/HomePage/HomePage';
// import CreateEvent from './components/Pages/CreateEvent/CreateEvent';
import DrawResult from './components/Pages/DrawResult/DrawResult';
// import EventDetails from './components/Pages/EventDetails/EventDetails';
// import FAQ from './components/Pages/FAQ/FAQ';
// import LegalNotices from './components/Pages/LegalNotices/LegalNotices';
// import Login from './components/Pages/Login/Login';
// import MyAccount from './components/Pages/MyAccount/MyAccount';
// import MyEvent from './components/Pages/MyEvent/MyEvent';
// import PersonnalData from './components/Pages/PersonnalData/PersonnalData';
// import SignUp from './components/Pages/SignUp/SignUp';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DrawResult />
  </React.StrictMode>
);
