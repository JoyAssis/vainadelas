import styled from "styled-components"
import Niveis from "../assets/niveis.png"
import ImgComunidade from "../Imagens/imgcomunidade.png"
import Selos from "../Imagens/selos.png"

const TerceiraSessao = styled.section`
  background-color: #000;
  color: #D9D9D9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  
  h2 {
    width: 80%;
    font-size: 50px;
  }

  p {
    width: 80%;
    font-size: 40px;
  }

  button {
    font-size: 30px;
    height: 14vh;
    width: 20%;
    background-color: #C6408A;
    border: none;
    border-radius: 15px;
    color: #D9D9D9;
    cursor: pointer;
  }

  @media (min-width: 320px) and (max-width: 768px){
    height: 120vh;
    justify-content: space-evenly;
    
    h2 {
      margin-top: 20px;
      font-size: 30px;
      text-align: center;
    }

    p {
      font-size: 20px;
      text-align: center;
    }
    
    button {
      width: 70%;
      font-size: 20px;
    }

  }
`
const DivTerceiraSessao = styled.div`
  display: flex;
  justify-content: space-evenly;

  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 20%;
  }

  li {
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f89dc84d;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
    padding: 0 10px;
  }

  img {
    width: 50%;
  }

  @media (min-width: 320px) and (max-width: 768px){
    flex-direction: column;
    align-items: center;

    ul {
      width: 70%;
      height: 40vh;
    }

    li {
      height: 8vh;
      font-size: 18px;
    }

    img {
      width: 100%;
    }
  }
`

const ComunidadeBox = styled.section`
background-color: #000000;
`

const PrimeiraSection = styled.section`
display: flex;
align-items:center;
justify-content: space-evenly;
padding-top: 3rem;

img{
  width: 28vw;
}

@media (min-width: 320px) and (max-width: 768px){
  height: 100vh;
  flex-direction: column;

  img {
    width: 90%;
  }
}
`

const BoxPrimeiraSection = styled.div`
  width: 60%;
  height: 50vh;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;

h2{
  color: #D9D9D9;
  font-size: 65px;
  font-weight: 900;
}

p{
  color:#D9D9D9;
  font-size: 38px;
  font-weight: 300;
  line-height: 1.2;
    }

    @media (min-width: 320px) and (max-width: 768px){
      width: 90%;

      h2 {
        font-size: 30px;
        text-align: center;
      }

      p {
        font-size: 20px;
        text-align: center;
      }
    }
`

const SegundaSection = styled.section`
  width: 35%;
  height: 30vh;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  width:45%;
  margin-left: 4rem;
  padding-top: 5rem;

  h2{
  color: #D9D9D9;
  font-size: 50px;
  font-weight: 900;
}

p{
  color:#D9D9D9;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.2;
  }

    @media (min-width: 320px) and (max-width: 768px){
      width: 100%;
      margin: 0;
      align-items: center;
      padding-top: 0;
      padding-bottom: 1.5rem;
      height: 40vh;

      h2 {
        font-size: 30px;
        text-align: center;
      }

      p {
        font-size: 20px;
        text-align: center;
      }
}
`

const TerceiraSection = styled.section`
display: flex;
flex-direction:column;
align-items: end;
padding-right:5rem;

@media (min-width: 320px) and (max-width: 768px){
  padding: 0;
  align-items: center;
}
`
const Li = styled.li`
 font-size:5px;
`
const ImgSelos = styled.img`
  width: 50vw;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 98%;
  }
`

export default function Comunidades() {

  return (
    <>
   
    <ComunidadeBox>
      <PrimeiraSection>
        <BoxPrimeiraSection>
          <h2>Sua comunidade de aprendizado! </h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </BoxPrimeiraSection>
        <img src={ImgComunidade} alt="segurando uma lâmpada" />

      </PrimeiraSection>

      <SegundaSection>
        <h2>As vantagens de participar:</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </SegundaSection>

      <TerceiraSection>
        <ImgSelos src={Selos} alt="selos" />
      </TerceiraSection>
      <TerceiraSessao>
      <h2>Como subir de nível</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <DivTerceiraSessao>
        <ul>
          <Li>Escolha um curso na página principal</Li>
          <Li>Clique no botão: “ingressar na comunidade”</Li>
          <Li>Escolha a opção: “Se tornar uma Instrutora voluntária”</Li>
        </ul>
          <img src={Niveis} alt="" />
      </DivTerceiraSessao>
      <button>ESCOLHA UMA COMUNIDADE</button>
    </TerceiraSessao>

    </ComunidadeBox>
    <TerceiraSessao>
      <h2>Como subir de nível</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <DivTerceiraSessao>
        <ul>
          <li>Escolha um curso na página principal</li>
          <li>Clique no botão: “ingressar na comunidade”</li>
          <li>Escolha a opção: “Se tornar uma Instrutora voluntária”</li>
        </ul>
          <img src={Niveis} alt="" />
      </DivTerceiraSessao>
      <button>ESCOLHA UMA COMUNIDADE</button>
    </TerceiraSessao>
    
    </>
  )

}