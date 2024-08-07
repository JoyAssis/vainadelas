import React from "react"
import Grafico from "../Imagens/grafico.png"
import Background from "../Imagens/backgroundmain.png"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"


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
        cursor: pointer;
    }
    @media (min-width: 320px) and (max-width: 768px){
    h2 {
        width: 90%;
        font-size: 25px;
    }

    p {
        width: 90%;
        font-size: 18px;
    }
    button{
        width: 70%;
        height: 10vh;
    }
    }
}

@media (min-width: 320px) and (max-width: 768px){
    height: 90vh;
    flex-direction: column-reverse;

    section {
        width: 100%;
        height: 50vh;
    }
    
    img {
        width: 90%;
        height: auto;
    }   
}
`

export default function InfoMentoria() {

    const navigate = useNavigate();

    return (
        <MainBox>
            <img src={Grafico} alt="" />

            <section>
                <h2>Descubra o Poder da Mentoria com Mulheres Líderes na Tecnologia</h2>
                <p>Conecte-se com profissionais inspiradoras, adquira insights valiosos e desenvolva habilidades essenciais para alcançar o sucesso na área de tecnologia.</p>
                <button onClick={()=> navigate("/mentorias")}>Confira as mentorias disponíveis</button>
            </section>
        </MainBox>
    )
}