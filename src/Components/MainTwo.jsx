import React from "react"
import Grafico from "../Imagens/grafico.png"
import Background from "../Imagens/backgroundmain.png"
import styled from "styled-components"


const MainBox = styled.main`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 70vh; 
width: 100%;
background-color:  #F89DC8;
background-image:url(${Background});
background-repeat: no-repeat;
background-size: 100% 70vh;
img{

height: 70vh;
}

section{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    text-align:center;
    height:60vh;
    h2{
        font-size:2rem;
        font-weight: 400;
        color: #8F2361;
    }

    p{
        font-size:1.4rem;
        font-weight: 400;
       color: #8F2361;
    }

    button{
        width: 20vw;
        height: 15vh;
        border-radius: 20px;
        background-color: #F3EEEE;
        font-size: 1.4rem;
        color: #8F2361;
        border: none;
        filter: drop-shadow(0 0 0.75rem #943271);
    }
}
`

export default function MainTwo() {
    return (
        <MainBox>
            <img src={Grafico} alt="" />

            <section>
                <h2>Descubra o Poder da Mentoria com Mulheres Líderes na Tecnologia</h2>
                <p>Conecte-se com profissionais inspiradoras, adquira insights valiosos e desenvolva habilidades essenciais para alcançar o sucesso na área de tecnologia.</p>
                <button>Confira as mentorias disponíveis</button>
            </section>
        </MainBox>
    )
}