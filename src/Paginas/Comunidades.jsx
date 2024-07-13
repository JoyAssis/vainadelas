import styled from "styled-components"
import HeaderLogada from "../Components/HeaderLogada"
import Niveis from "../assets/niveis.png"

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
    font-size: 40px;
    height: 14vh;
    width: 30%;
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
    font-size: 30px;
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

export default function Comunidades() {
  return (
    <>
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
