import React from "react";
import PropTypes from "prop-types";
import star_full from "../../assets/star_full.png";
import star_empty from "../../assets/star_empty.png"


const Rating = ({ data }) => {
  const stars = [];
  const rating = data.rating;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img key={i} src={star_full} alt="Full Star" />);
    } else {
      stars.push(<img key={i} src= {star_empty} alt="Empty Star" />);
    }
  }

  return <div>{stars}</div>;
};

Rating.propTypes = {
  data: PropTypes.shape({
    rating: PropTypes.number.isRequired
  }).isRequired
};

export default Rating;