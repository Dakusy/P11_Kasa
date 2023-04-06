import React from "react";
import logo from '../logo.svg';

import '../css/Header.css';
import '../css/Footer.css';

import Card from "../components/modules/Card.jsx";

function App() {
  return (
    <div class= "card-container">
      <Card title="Titre de la location" imageSrc={logo} />
      <Card title="Titre de la location" imageSrc={logo} />
      <Card title="Titre de la location" imageSrc={logo} />
      <Card title="Titre de la location" imageSrc={logo} />
      <Card title="Titre de la location" imageSrc={logo} />
      <Card title="Titre de la location" imageSrc={logo} />

    </div>
  );
};

export default App;
