import React from "react";
import { Link } from "react-router-dom";
import "../../css/Card.css"

function Card({ data }) {
  return (
    <div className="card">
      <Link to={`/Logement/${data.id}`}>
      <img className="card-img" src={data.cover} alt={data.title} />
      <div className="card-title">{data.title}</div>
      </Link>
    </div>
  );
};


export default Card;