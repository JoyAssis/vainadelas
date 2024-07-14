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

`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid white; 
`;

const UserInfo = styled.div``;

const Name = styled.h1`
  font-size: 50px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`;

const Details = styled.p`
  font-size: 16px;
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

`
const Bio = styled.div`
  width:50vw;
  height:20vh;
  margin-left: 200px;
  background: #3B3B47; 
  padding: 10px;
  border-radius: 5px;

`;

const BioText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
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
          <Button>Editar Perfil</Button>
        </UserInfo>
      </Header>
      <Line></Line>
      <H2>Sobre Pepita</H2>
      <Bio>
        <BioText>Texto curto sobre você (max 400 caracteres)</BioText>
      </Bio>
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
      <Footer/>
    </>
    
  )
}
