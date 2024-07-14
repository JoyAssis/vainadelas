import React from 'react'
import styled from 'styled-components';
import userImage from "../assets/perfilImage.png"
import Fundo from '../assets/Fundo.png'; 
import Livro from '../assets/livroRosa.png'
import Lapis from '../assets/lapisRosa.png'
import Diamante from '../assets/diamanteRosa.png'
import BarraDeProgresso from '../assets/barraDeProgresso.png'
import IconeIniciarSessao from '../assets/iconeIniciarSessao.png'
import SeloVerificado from "../assets/imagensVantagens/seloVerificado.png"
import Data from '../assets/data.png';
import Meet from '../assets/meet.png';
import Zoom from '../assets/zoom.png';



const ProgressoContainer = styled.section`
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const PerfilContainer = styled.section`
    background-image:url(${Fundo}); 
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50vh;
  width: 60%;

  .botaoMobile {
    display: none;
  }

  .seloVerificado{
      position: relative;
      width: 100px;
      top: 100px;
      right: 100px;
    }

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 60vh;

    .seloVerificado{
      position: relative;
      width: 60px;
      bottom: 60px;
      left: 60px;
      top: auto;
      right: auto;
    }

    .botaoMobile {
      display: flex;
    }
  }
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;

  @media (min-width: 320px) and (max-width: 768px) {
    margin-top: 20px;
    width: 200px;
    height: 200px;
  }

`;

const UserInfo = styled.div`
width: 68%;

@media (min-width: 320px) and (max-width: 768px) {
  width: 90%;

  .botaoDesk {
    display: none;
  }
}
`;

const Name = styled.h1`
  font-size: 50px;
  margin: 0;
  font-family: 'Roboto', sans-serif;

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 28px;
  }
`;

const Details = styled.p`
  font-size: 32px;
  margin: 5;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;

  @media (min-width: 320px) and (max-width: 768px){
    font-size: 18px;
  }
`;
const Line = styled.div`
  background-color:#F89DC8;
  width: 100%;
  height: 5px;

`

const Button = styled.button`
      display: flex;
      justify-content: center;
      align-items: center;
      color: #943271;
      background-color: #BDC7D8;
      font-size: 20px;
      font-weight: 700;
      border-radius: 15px;
      width: 30%;
      height: 5vh;
      margin: 20px 0;
      cursor: pointer;

  @media (min-width: 320px) and (max-width: 768px) {
    height: 8vh;
    width: 40%;
  }
`;

const InfoProgresso = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 20%;
        height: 30vh;

        p {
            font-size: 35px;
        }
    }

    @media (min-width: 320px) and (max-width: 768px) {
        div {
            width: 45%;
            justify-content: space-between;
            height: 25vh;

            p {
                font-size: 25px;
                text-align: center;
                height: 15vh;
                display: flex;
                align-items: center;
            }
        }
    }
`
const Figure = styled.figure`
display: flex;
justify-content: center;
align-items: center;

figcaption {
   font-size : 80px;
}

@media (min-width: 320px) and (max-width: 768px) {
    width: 95%;
    height: 10vh;
    justify-content: space-evenly;

    img {
        width: 50%;
    }

    .lapis {
        width: 30%;
    }

    figcaption {
        font-size: 50px;
    }
}
`

const TreineeSection = styled.section`
display: flex;
flex-direction: column;
align-items: start;
width: 90%;
margin-top: 50px;

p {
    width: 40%;
    font-size: 30px;
    height: 14vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

h3 {
    height: 6vh;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.barraDeProgresso {
    width: 60%;
}

@media (min-width: 320px) and (max-width: 768px) {

    p {
        width: 90%;
        font-size: 20px;
    }

    h3 {
        width: 100%;
        justify-content: start;   
    }

    .barraDeProgresso {
        width: 100%;
    }
}

`
const TituloTreinee = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 12vh;

    img {
        border: solid #fff;
        border-radius: 100px;
        padding: 10px 4px;
    }

    h2 {
        font-size: 45px;
        margin-left: 30px;
    }

    @media (min-width: 320px) and (max-width: 768px) {
        img {
            width: 80px;
        }

        h2 {
        font-size: 30px;
        margin-left: 20px;
        }
    }
`

const DivButton = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 40%;
    }

    img {
        width: 200px;
        margin-bottom: 40px;
    }

    button {
        width: 40%;
        height: 8vh;
        font-size: 30px;
        background-color: #C6408A;
        color: #D9D9D9;
        border-radius: 15px;
        border: none;
        cursor: pointer;
    }

    @media (min-width: 320px) and (max-width: 768px) {

        div {
            width: 100%;
        }

        img {
            width: 100px;
        }

        button {
            width: 50%;
            font-size: 20px;
        }
    }
`

export default function Progresso() {
  return (
    <ProgressoContainer>
      <PerfilContainer>
          <Header>
            <ProfileImage src={userImage} alt="Perfil" />
            <img className='seloVerificado' src={SeloVerificado} alt="Selo de verificação de conta" />
            <UserInfo>
              <Name>Priscila Nogueira (Pepita)</Name>
              <Details>Participante desde 12/07/2024</Details>
              <Button className='botaoDesk'>Editar Perfil</Button>
            </UserInfo>
            <Button className='botaoMobile'>Editar Perfil</Button>
          </Header>
          <InfoProgresso>
            <div>
                <Figure>
                    <img src={Livro} alt="Vetor de livro rosa aberto" />
                    <figcaption>2</figcaption>
                </Figure>
                <p>Aulas Dadas</p>
            </div>
            <div>
                <Figure>
                    <img className='lapis' src={Lapis} alt="Vetor de lápis rosa" />
                    <figcaption>6</figcaption>
                </Figure>
                <p>Assuntos Estudados</p>
            </div>
          </InfoProgresso>
          <Line></Line>
      </PerfilContainer>
      <TreineeSection>
        <TituloTreinee>
            <img src={Diamante} alt="Diamante cor de rosa" />
            <h2>Trainee</h2>
        </TituloTreinee>
            <p>Participe de mais aulas como Instrutora e suba para o nível Júnior!</p>
            <h3>Meu progresso</h3>
            <img className='barraDeProgresso' src={BarraDeProgresso} alt="Barra de Progresso" />
        <DivButton>
            <div>
                <img src={IconeIniciarSessao} alt="Icone de Iniciar Sessao" />
                <button>Inicie uma aula</button>
            </div>
        </DivButton>
      </TreineeSection>
      <Agendar/>
    </ProgressoContainer>
    
  )
}



const SectionModalAgendar = styled.section`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
height:108vh;
h2{
  margin-bottom:24px;
  font-size:2.2em;
  font-family:"Roboto", sans-serif;
}
`;
const FormModalAgenda = styled.form`
display:flex;
flex-direction:column;
height:54vh;
font-family:"Roboto",sans-serif;
p{
  margin-top:4vh;
  font-family:"PT Sans",sans-serif;
  text-align:center;
  color:#F89DC8;
}
label{
  display:flex;
  align-items:center;
  height:50px;
  font-weight:bold;
  font-size:22px;
  // border:solid;
}

`;
const Inputs = styled.input`
width:${(props) => props.widthInput};
height:28px;
border:none;
outline: none;
border-radius:5px;
background-color:#D9D9D9;
padding-left:5px;
margin-left:8px;
&:focus{
 border:none;
 outline:none;
}
`;

const DataImg = styled.img`
height:6vh;
margin-left:5px;
object-fit:contain;
`;
const IconPlatforms = styled.img`
height:6.3vh;
margin-left:5px;
&:hover{
  transform:scale(116%);
}
`;

const ButtonsBox = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
height:15vh;
button{
  color:#943271;
  background-color:#F89DC8;
  border:none;
  width:11vw;
  height:6vh;
  font-size:20px;
  border-radius:5px;
  font-weight:bold;
  &:hover{
    transform:scale(110%);
  }
}
`;
function Agendar() {
  return (
    <SectionModalAgendar>
      <h2>Agendar ou Iniciar</h2>
      <FormModalAgenda>
        <label>
          Tema da aula: <Inputs type="text" widthInput={'14vw'} required />
        </label>
        <label>
          Data da aula: <Inputs type="text" widthInput={'14.6vw'} required />
          <DataImg src={Data} alt="" />
        </label>
        <label>
          Horário da aula: <Inputs type="text" widthInput={'9vw'} required />
        </label>
        <label>
          Escolha a plataforma:
          <IconPlatforms src={Meet} alt="Logo do Google Meet" />
          <IconPlatforms src={Zoom} alt="Logo do Zoom" />
        </label>
        <p>As aulas devem ter no mínimo 1h30 de duração</p>
        <ButtonsBox>
          <button>Agendar</button>
          <button>Iniciar</button>
        </ButtonsBox>
      </FormModalAgenda>
    </SectionModalAgendar>
  );
}


