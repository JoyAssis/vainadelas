import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components"
import ImgCarrosel1 from "../Imagens/carroselheader1.png"
import ImgCarrosel2 from "../Imagens/carroselheader2.png"
import ImgCarrosel3 from "../Imagens/carroselheader3.png"

const Dots = (clickHander) => {
  const DotsStyle = {
    background: '#F8C7E6',
    width: 30,
    height: 30,
    borderRadius: '50%',
    border: 'thin solid #8F2361',
    display: 'inline-block',
    margin: '0 8px',
    cursor: 'pointer',
  }



  return (
    <div
      style={DotsStyle}
      onMouseOver={(e) => (e.target.style.opacity = '0.5')}
      onMouseLeave={(e) => (e.target.style.opacity = '1')}
      onClick={clickHander}
    ></div>
  );
};


const Carrossel = styled(Carousel)`
  width: 100%;

  img{
    width: 1620px;
    height: 571px;
  }


  @media (max-width: 768px){
        background-color: #141414;

        img{
            width: 768px;
            height: 300px;
        }
    }


`

function Banner() {
  return (
    <Carrossel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} interval="4000" renderIndicator={Dots} >
      
        <img src={ImgCarrosel1}/>
      
        <img src={ImgCarrosel2}/>

        <img src={ImgCarrosel3}/>

      
    </Carrossel>
  );
}

export default Banner;
