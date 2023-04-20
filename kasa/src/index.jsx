import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";



import './css/index.css';

import Home from './pages/Home';
import Logement from './pages/Logement';
import Apropos from './pages/Apropos';
import PageNotFound from './pages/PageNotFound';

import Header from './components/Header';
import Footer from './components/Footer';


import reportWebVitals from './reportWebVitals';

config.autoAddCss = false;
config.license = "free";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/logement/:id" element={<Logement />} />
        <Route exact path="/apropos" element={<Apropos />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
