import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import "../styles/Learn.css"

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev slick-arrow-custom slick-arrow-left" onClick={onClick}>
      <FaChevronLeft size={24} color="red" className="bg-red-700" />
    </div>
  );
};

export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow-custom slick-arrow-right" onClick={onClick}>
      <FaChevronRight size={24} color="red" className="bg-red-700"/>
    </div>
  );
};

PrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired // Validación de tipo función para onClick
};

NextArrow.propTypes = {
    onClick: PropTypes.func.isRequired // Validación de tipo función para onClick
};

