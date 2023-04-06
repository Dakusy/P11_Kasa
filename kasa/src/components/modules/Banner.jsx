import React from 'react';

const Banner = ({ title, subtitle, image }) => {
  return (
    <div className="banner">
      <img src={image} alt={title} />
      <div className="banner__content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;