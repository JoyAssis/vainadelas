import React from "react"
import Carousel from "../Components/CarouselHeader"
import Carrossel from "../Components/CarouselRecomendados/Carrossel"
import InfoMentoria from "../Components/InfoMentoria"

import Banco from "../Components/CarouselRecomendados/Cursos/bancodedados.png"
import C from "../Components/CarouselRecomendados/Cursos/c.png"
import Controle from "../Components/CarouselRecomendados/Cursos/controle.png"
import Estrutura from "../Components/CarouselRecomendados/Cursos/estrutura.png"
import HtmlCss from "../Components/CarouselRecomendados/Cursos/htmlcss.png"
import Java from "../Components/CarouselRecomendados/Cursos/java.png"
import Js from "../Components/CarouselRecomendados/Cursos/js.png"
import Mobile from "../Components/CarouselRecomendados/Cursos/mobile.png"
import Php from "../Components/CarouselRecomendados/Cursos/php.png"
import Phyton from "../Components/CarouselRecomendados/Cursos/phyton.png"
import Sql from "../Components/CarouselRecomendados/Cursos/sql.png"
import Styled from "../Components/CarouselRecomendados/Cursos/styled.png"

import { useEffect } from "react"

export default function Index(){
  const images = [Banco, C, Controle, Estrutura, HtmlCss, Java, Js, Mobile, Php, Phyton, Sql, Styled];
  const front = [ Estrutura, HtmlCss, Js, Mobile,Styled, Controle];
  const back = [Banco, C, Java, Php, Phyton, Sql];


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
      {front.map((image, index) => (
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
        {back.map((image, index) => (
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
      <InfoMentoria/>
    </>
  )
}