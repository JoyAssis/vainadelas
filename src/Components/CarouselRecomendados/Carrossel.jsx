import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


//componente de carrossel pra renderizar a imagem
const Carrossel = ({imagens,titulo, children}) => {
//configuração
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
 //montagem do carrossel
  return (
    <div style={{padding: '60px', background: '#000' }}>
      <h2 style={{ color: '#FFFF' }}>{titulo}</h2>
      <Slider {...settings}> 
        {children}
      </Slider>
    </div>
  );
}

//personalização da seta
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent", left:"88.5vw" }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default Carrossel;