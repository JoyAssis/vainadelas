import styled from 'styled-components';
import image3 from '../assets/cursosBanners/image1.png';
import image2 from '../assets/cursosBanners/image2.png';
import Fundo from '../assets/Fundo.png';
import userImage from '../assets/perfilImage.png';
import Carrossel from '../Components/CarouselRecomendados/Carrossel';
import Footer from '../Components/Footer';

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

  .botaoMobile {
    display: none;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 60vh;

    .botaoMobile {
      display: flex;
    }
  }
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 2px solid white; 

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
  }
`;

const Details = styled.p`
  font-size: 32px;
  margin: 5;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
`;
const Line = styled.div`
  background-color:#F89DC8;
  width: 100%;
  height: 5px;

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


export default function Perfil() {
  const images = [image2, image3, image2, image3, image2, image3, image2, image3, image2, image3];

  return (
    <>
    <ProfileContainer>
      <Header>
        <ProfileImage src={userImage} alt="Perfil" />
        <UserInfo>
          <Name>Priscila Nogueira (Pepita)</Name>
          <Details>Participante desde 12/07/2024</Details>
          <Details>2 aulas dadas</Details>
          <Button className='botaoDesk'>Editar Perfil</Button>
        </UserInfo>
        <Button className='botaoMobile'>Editar Perfil</Button>
      </Header>
      <Line></Line>
      <BioContainer>
        <H2>Sobre Pepita</H2>
        <Bio>
          <BioText>Texto curto sobre você (max 400 caracteres)</BioText>
        </Bio>
      </BioContainer>
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
