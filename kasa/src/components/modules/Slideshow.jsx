import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = pictures.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = pictures.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  return (
    <><div className="pictures-container">
      <img src={pictures[currentIndex]} alt="Photos du logement" className="img-carousel" key={currentIndex} />
    </div><section className="arrows">
        <div id="arrow_back" onClick={() => previousSlide()}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div id="arrow_next" onClick={() => nextSlide()}>
        <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </section><p className="counter">{currentIndex + 1}/{pictures.length}</p></>
  );
};

export default Slideshow;