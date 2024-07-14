import styled from "styled-components"
import ImagemMentoria from "../assets/imagemMentoria.png"
import IconeSoftSkills from "../assets/imagensVantagens/iconeSoftSkills.png"
import SeloVerificado from "../assets/imagensVantagens/seloVerificado.png"
import SeloLiderança from "../assets/imagensVantagens/seloLideranca.png"
import Grid from "../assets/vaiNaDelasGrid.png"

const MentoriaContainer = styled.section`
  background-color: #000;
  color: #fff;

`
const PrimeiraSessaoMentoria = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60vh;

  div {
    width: 40%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 55px;
    }
    p {
      height: 25vh;
      font-size: 30px;
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    height: 85vh;
    flex-direction: column-reverse;

    img {
      width: 90%;
    }

    div {
      width: 90%;
      height: 30vh;
      justify-content: space-evenly;

    h2 {
      font-size: 30px;
    }
    p {
      height: auto;
      font-size: 20px;
      text-align: center;
    }
    }
  }
`
const SegundaSessaoMentoria = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 70vh;

  h2 {
    font-size: 55px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    height: 130vh;

    h2 {
      font-size: 30px;
    }
  }
`

const DivVantagens = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    height: 110vh;
    justify-content: space-between;
  }
`

const BoxesVantagens = styled.div`
  background-color: #f89dc84c;
  width: 20%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  img {
    position: relative;
    bottom: 110px;
  }

  .seloSoftSkills {
    width: 145px;
  }

  .seloVerificado {
    bottom: 80px;
  }

  p {
    font-size: 28px;
    width: 90%;
    position: relative;
    bottom: 40px;
    text-align: center;
  }

  .vantagemSoftSkills {
    bottom: 50px;
  }

  .vantagemSeloVerificado {
    bottom: 20px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 80%;
    height: 28vh;

    img {
    width: 32%;
    bottom: 60px;
  }

  .seloSoftSkills {
    width: 30%;
  }

  .seloVerificado {
    bottom: 40px;
  }

    p {
      font-size: 22px;
    }

    .vantagemSoftSkills {
    bottom: 30px;
  }
  .vantagemLideranca {
    bottom: 10px;
  }
  }
`

const TerceiraSessaoMentoria = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 58vh;

  h2 {
    font-size: 55px;
  }

  p {
    font-size: 35px;
    height: 8vh;
  }

  button {
    background-color: #C6408A;
    background-image: url(${Grid});
    height: 14vh;
    width: 20%;
    font-size: 30px;
    color: #D9D9D9;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    height: 45vh;
    h2 {
      font-size: 30px;
    }

    p {
      font-size: 20px;
      width: 70%;
      text-align: center;
      height: auto;
    }
    button {
      width: 70%;
    }
  }
`

export default function Mentorias() {

  return (
    <MentoriaContainer>
      <PrimeiraSessaoMentoria>
        <img src={ImagemMentoria} alt="" />
        <div>
          <h2>Torne-se uma mentora</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....</p>
        </div>
      </PrimeiraSessaoMentoria>
      <SegundaSessaoMentoria>
        <h2>Conheça as vantagens:</h2>
        <DivVantagens>
            <BoxesVantagens>
              <img className="seloSoftSkills" src={IconeSoftSkills} alt="" />
              <p className="vantagemSoftSkills">Mentore as integrantes a aprimorar as Soft Skills</p>
            </BoxesVantagens>
            <BoxesVantagens>
              <img className="seloVerificado" src={SeloVerificado} alt="" />
              <p className="vantagemSeloVerificado">Receba o selo Voluntária no perfil da plataforma e para compartilhar nas suas redes!</p>
            </BoxesVantagens>
            <BoxesVantagens>
              <img src={SeloLiderança} alt="" />
              <p className="vantagemLideranca">Receba o Selo de Impacto em Liderança Tech</p>
            </BoxesVantagens>
        </DivVantagens>
      </SegundaSessaoMentoria>
      <TerceiraSessaoMentoria>
        <h2>Comece agora!</h2>
        <p>Transforme vidas e inspire futuras líderes!</p>
        <button>Me tornar uma Mentora</button>
      </TerceiraSessaoMentoria>
    </MentoriaContainer>
  )
}
