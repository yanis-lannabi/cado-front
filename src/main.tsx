import React from 'react';
import ReactDOM from 'react-dom/client';

import LegalNotices from './components/Pages/LegalNotices/LegalNotices';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LegalNotices />
  </React.StrictMode>
);
