import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';

import GlobalFonts from './styles/fonts';
import GlobalStyle from './styles/global';

export const App: React.FC = () => (
  <Router>
    <Routes />
    <GlobalFonts />
    <GlobalStyle />
  </Router>
);
