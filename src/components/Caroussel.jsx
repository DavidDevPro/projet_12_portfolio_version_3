import PropTypes from "prop-types";
import { useState } from "react";
import arrowRight from "../assets/images/arrowRight.svg";
import arrowLeft from "../assets/images/arrowLeft.svg";

const Caroussel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];
  const numSlides = slides.length;

  const updateIndex = (increment) => {
    setCurrentIndex((lastIndex) => {
      let newIndex = lastIndex + increment;

      newIndex = newIndex >= numSlides ? 0 : newIndex;
      newIndex = newIndex < 0 ? numSlides - 1 : newIndex;
      return newIndex;
    });
  };

  return (
    <div className="caroussel">
      <img
        className="caroussel_img"
        src={currentSlide}
        alt={`Slide ${currentIndex + 1}`}
      />
      <img
        className="arrow arrowLeft"
        src={arrowLeft}
        alt="Flèche gauche de navigation des slides"
        onClick={() => updateIndex(-1)}
      />
      <img
        className="arrow arrowRight"
        src={arrowRight}
        alt="Flèche droite de navigation des slides"
        onClick={() => updateIndex(1)}
      />
      <div className="slide_indicator">
        {`${currentIndex + 1} / ${numSlides}`}
      </div>
    </div>
  );
};

Caroussel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Caroussel;
