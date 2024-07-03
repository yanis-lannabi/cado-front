import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';
import CreateEvent from './components/Pages/CreateEvent/CreateEvent';
import DrawResult from './components/Pages/DrawResult/DrawResult';
import EventDetails from './components/Pages/EventDetails/EventDetails';
import FAQ from './components/Pages/FAQ/FAQ';
import HomePage from './components/Pages/HomePage/HomePage';
import LegalNotices from './components/Pages/LegalNotices/LegalNotices';
import MyAccount from './components/Pages/MyAccount/MyAccount';
import MyEvent from './components/Pages/MyEvent/MyEvent';
import PersonalData from './components/Pages/PersonalData/PersonalData';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/se-connecter" element={<Login />} />
        <Route path="/s-inscrire" element={<SignUp />} />
        <Route path="/creer-un-evenement" element={<CreateEvent />} />
        <Route path="/resultat" element={<DrawResult />} />
        <Route path="/details-evenement" element={<EventDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/mon-compte" element={<MyAccount />} />
        <Route path="/mes-evenements" element={<MyEvent />} />
        <Route path="/mes-donnees-personnelles" element={<PersonalData />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
