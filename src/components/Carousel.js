import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true, // Muestra puntos de navegación
    infinite: true, // Desplazamiento infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Muestra 3 elementos por vez
    slidesToScroll: 1, // Desplaza de a un elemento por vez
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 0, // En pantallas pequeñas, muestra 1 por vez
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <h3>Slide 1</h3>
        </div>
        <div className="carousel-item">
          <h3>Slide 2</h3>
        </div>
        <div className="carousel-item">
          <h3>Slide 3</h3>
        </div>
        <div className="carousel-item">
          <h3>Slide 4</h3>
        </div>
        <div className="carousel-item">
          <h3>Slide 5</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
