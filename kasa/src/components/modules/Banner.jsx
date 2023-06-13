import React from 'react';

const Banner = ({ title, image }) => {
  return (
    <div className="banner">
      <img src={image} alt={title} />
      <div className="banner__alt">{title}</div>
    </div>
  );
};

export default Banner;