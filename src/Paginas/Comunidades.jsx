import styled from "styled-components"
import ImgComunidade from "../Imagens/imgcomunidade.png"
import Selos from "../Imagens/selos.png"

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
`

const SegundaSection = styled.section`

  width: 35%;
  height: 30vh;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  width:45%;
  margin-left: 5rem;
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

`

const TerceiraSection = styled.section`
display: flex;
flex-direction:column;
align-items: end;
padding-right:5rem;
`

const ImgSelos = styled.img`
  width: 50vw;
`

export default function Comunidades() {

  return (
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

    </ComunidadeBox>
  )

}