import React from "react"
import Carousel from "../Components/CarouselHeader"
import Carrossel from "../Components/CarouselRecomendados/Carrossel"
import Footer from "../Components/Footer"
import MainTwo from "../Components/MainTwo"

import image1 from '../assets/cursosBanners/image1.png'
import image2 from '../assets/cursosBanners/image2.png'


export default function Index(){
  const images = [image1, image2, image1, image2, image1, image2, image1, image2, image1, image2];
  return(
    <>
      <Carousel />
      <Carrossel titulo={"Cursos"}> 
         {images.map((image, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '300px',
                height: '250px',
              }}
            ></div>
          </div>
        ))}
      </Carrossel>
      <Carrossel titulo={"Front-end"}>
      {images.map((image, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '300px',
                height: '250px',
              }}
            ></div>
          </div>
        ))}
      </Carrossel>
      <Carrossel titulo={"Back-end"}>
      {images.map((image, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '300px',
                height: '250px',
              }}
            ></div>
          </div>
        ))}
      </Carrossel>
      <MainTwo/>
      <Footer />
    </>
  )
}