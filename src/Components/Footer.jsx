import React from "react"
import Linkedin from "../Imagens/linkedin.png"
import Instagram from "../Imagens/instagram.png"
import Email from "../Imagens/email.png"
import styled from "styled-components"

const FooterBox = styled.footer`
height: 25vh;
background-color: #000000; 
display: flex;
flex-direction: column;
justify-content: center;

div{
height: 5vh;
background-color: #000000;  
border-bottom: solid 5px #D9D9D9;
}

@media (max-width: 768px){
    height: 30vh;
    align-items: start;
    justify-content: space-evenly;
    }
`

const BoxOne = styled.section`
width:  20%;
height: 12vh;
display: flex;
align-items: center;
justify-content: space-evenly;

a{
    width: 15%;
}

@media (max-width: 768px){
    width: 80%;
    justify-content: flex-start;
    margin: 0 20px;

    img {
        width: 32px;
    }
}
`

const BoxTwo = styled.section`
height: 12vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #D9D9D924;
width: 100%;

p{
    color: #DCB1FC;
    font-size: 25px;

    @media (max-width: 768px){
    font-size: 10px;
    }
}

`

export default function Footer() {
    return (
        <FooterBox>

            <div>
            </div>

            <BoxOne>

                <a href="https://www.linkedin.com/company/hacking-rio/?originalSubdomain=br" target="_blank"> <img src={Linkedin} alt="Logo linkedin" /> </a>

                <a href="https://www.instagram.com/hackingrio/" target="_blank">  <img src={Instagram} alt="Logo instagram" /> </a>

                <a href="https://hackingrio.com/" target="_blank">  <img src={Email} alt="Logo email" /> </a>

            </BoxOne>

            <BoxTwo>
                <p>Developer by Vai na Delas - Hacking.Her 2024</p>
            </BoxTwo>
        </FooterBox>
    )
}