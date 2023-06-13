import React from "react";

import data from "../assets/data.json";
import bannerImage from '../assets/Background.png';

import '../css/Header.css';
import '../css/Footer.css';
import '../css/Banner.css';

import Card from "../components/modules/Card.jsx";
import Banner from "../components/modules/Banner.jsx";



function App() {
  return (
    <div>
      <Banner
      title="Chez vous, partout et ailleurs"
        image={bannerImage}
      />
      <div class="card-container">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}


      </div>
    </div>
  );
};

export default App;
