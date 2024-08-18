import ReactDOM from 'react-dom/client';
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
import MyEvents from './components/Pages/MyEvents/MyEvents';
import PersonalData from './components/Pages/PersonalData/PersonalData';

import ProtectedRoute from './components/ProtectedRoute';

import Header from './components/Elements/Header/Header';
import Footer from './components/Elements/Footer/Footer';

import './styles/index.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/se-connecter" element={<Login />} />
        <Route path="/s-inscrire" element={<SignUp />} />
        <Route
          path="/creer-un-evenement"
          element={
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resultat/:token"
          element={
            <ProtectedRoute>
              <DrawResult />
            </ProtectedRoute>
          }
        />
        <Route path="/details-evenement" element={<EventDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/mentions-legales" element={<LegalNotices />} />

        <Route
          path="/mon-compte"
          element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mes-evenements"
          element={
            <ProtectedRoute>
              <MyEvents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mes-donnees-personnelles"
          element={
            <ProtectedRoute>
              <PersonalData />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
