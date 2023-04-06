import React from "react";

import "../../css/Card.css"

const Card = ({ title, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default Card;