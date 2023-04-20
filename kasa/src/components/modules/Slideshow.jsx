import React, { useState } from "react";

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
    <div>
      <img src={pictures[currentIndex]} alt="Slideshow" />

      <button onClick={previousSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;