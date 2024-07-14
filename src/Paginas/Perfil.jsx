import styled from 'styled-components';
import Curso1 from "../Components/CarouselRecomendados/Cursos/bancodedados.png"
import Curso2 from "../Components/CarouselRecomendados/Cursos/htmlcss.png"
import Curso3 from "../Components/CarouselRecomendados/Cursos/js.png"
import Curso4 from "../Components/CarouselRecomendados/Cursos/c.png"
import NaoLogado from "../assets/naologado.png"
import Fundo from '../assets/Fundo.png';
import userImage from '../assets/perfilImage.png';
import Carrossel from '../Components/CarouselRecomendados/Carrossel';
import { useState } from "react";

//estilo
const ProfileContainer = styled.div`
  background-image:url(${Fundo}); 
  background-repeat: no-repeat;
  color: white;  
  height:115vh;
  background-size: cover;
  
 `;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin:0px 0px 0px 200px;
  padding: 150px;
  gap: 10px;
  height: 70vh;


  .botaoMobile {
    display: none;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 70vh;

    .botaoMobile {
      display: flex;
      height: 50px;
    }
  }
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;

  @media (min-width: 320px) and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const UserInfo = styled.div`

@media (min-width: 320px) and (max-width: 768px) {
  height: 20vh;

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
    font-size: 30px;
    margin-left: 0.5rem;
  }
`;

const Details = styled.p`
  font-size: 32px;
  margin: 5;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 25px;
    margin: 0.5rem;
  }


`;
const Line = styled.div`
  background-color:#F89DC8;
  width: 100%;
  height: 5px;

  @media (min-width: 320px) and (max-width: 768px) {
  margin-top: 4rem;
  }

`
const H2 = styled.h2`
  margin:100px 0px 10px 200px; 

  @media (min-width: 320px) and (max-width: 768px) {
    margin: 0;
    width: 80%;
  }

`
const BioContainer = styled.div`
  
  @media (min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;
  }
`

const Bio = styled.div`
  width: 50vw;
  height: 20vh;
  margin-left: 200px;
  background: #f89dc84e; 
 // opacity: 0.5;  

  padding: 10px;
  border-radius: 5px;

  @media (min-width: 320px) and (max-width: 768px) {
    margin: 0;
    padding: 0;
    width: 80%;
    height: 35vh;
    padding: 15px;
  }
`;

const BioText = styled.p`
  margin: 0;
  font-size: 20px;
`;

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

  @media (min-width: 320px) and (max-width: 768px) {
    height: 8vh;
    width: 40%;
  }
`;

//modal editar perfil

const ModalMudarPerfil = styled.section`
position:absolute;
top:27vh;
right:3vw;
width:33vw;
height: 46vh;
background-color:#4C303D;
border-radius:20px;
text-align: center;

display: flex;
flex-direction: column;
justify-content: space-evenly;

img{
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;
}

form{
width: 16vw;
height: 30vh; 
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items:flex-start;

input{
  width: 10vw;
  height: 3vh;
  padding-left:5px;
}

}
`

const SectionAtualizacao = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  button{
    font-weight:bold;
    font-family:"Signika",sans-serif;
    border:none;
    color:#943271;
    font-size: 20px;
  }

`


const BttFoto = styled.input`
  background-color:#BDC7D8;
  width: 8vw;
  height:8vh;
  border:none;
  border-radius: 5px;
  &::placeholder{
    font-weight:bold;
    color:#943271;
    font-size: 14px;
  }
`

const BttAtualizar = styled.button`
margin-top: 2.2rem;
  width: 8vw;
  height:4vh;
  background-color:#dcb1fc;
  border-radius: 5px;
`

export default function Perfil() {
  const images = [Curso1, Curso2, Curso3, Curso4];

  const [novoNome, setNovo] = useState("");
  const [modalEditarPerfil, setModalEditarPerfil] = useState(false);
  const [foto, setFoto] = useState(localStorage.getItem("foto_usuaria") === null ? NaoLogado:localStorage.getItem("foto_usuaria"));

  return (
    <>
      <ProfileContainer>
        <Header>
          <ProfileImage src={localStorage.getItem("foto_usuaria") === null ? userImage:localStorage.getItem("foto_usuaria")} alt="Perfil" />
          <UserInfo>
            <Name>{localStorage.getItem("name")}</Name>
            <Details>Participante desde {localStorage.getItem("data_criacao")}</Details>
            <Details>2 aulas dadas</Details>
            <Button onClick={() => setModalEditarPerfil(!modalEditarPerfil)} className='botaoDesk'>Editar Perfil</Button>
          </UserInfo>
          <Button className='botaoMobile'>Editar Perfil</Button>
        </Header>
        <Line></Line>
        <BioContainer>
          <H2>Sobre {localStorage.getItem("name")}</H2>
          <Bio>
            <BioText>Texto curto sobre você (max 400 caracteres)</BioText>
          </Bio>
        </BioContainer>


        {modalEditarPerfil && <ModalMudarPerfil>
          <h2>Editar Perfil</h2>

          <SectionAtualizacao>
            <img src={foto} alt="ícone não logado" />

            <form>
              <BttFoto onChange={(e)=> setFoto(e.target.value)} type="text" placeholder='Coloque o link de sua foto' />
              <h2>Seu nome: </h2>
              <input value={novoNome} onChange={(e) => setNovo(e.target.value)}
                type="text"
                placeholder="Altere seu nome"
              />
              <BttAtualizar onClick={() => {
                if(novoNome !== ""){
                   localStorage.setItem("name", novoNome);
                localStorage.setItem("foto_usuaria",foto)
                setModalEditarPerfil(false)
                location.reload();
                } else{
                  alert("Você deve adicionar uma foto e nome de usuária")
                }
               
              }}>Atualizar</BttAtualizar>
            </form>
          </SectionAtualizacao>

        </ModalMudarPerfil>}

      </ProfileContainer>


      <Carrossel titulo={"Seus cursos"}>
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
    </>

  )
}
