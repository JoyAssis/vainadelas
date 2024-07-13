import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react";
import LogoVaiNaDelas from "../assets/logoVaiNaDelas.png"
import iconeUsuarioLogado from "../assets/iconeUsuarioLogado.png"
import iconeIniciarSessao from "../assets/iconeIniciarSessao.png"

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    height: 12vh;
    background-color: #272421;
    color: #fff;
    font-family: "Signika", sans-serif;
    font-size: 28px;

@media (min-width: 320px) and (max-width: 768px){
  height: 16vh;
  justify-content: space-around;
  position: relative;
}
`
const DivHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60vw;

img{
    width: 250px;
}
`
const NavHeader = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30vw;

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    
    li {
        margin-right: 20px;
        }
    }
    a {
        text-decoration: none;
        color: rgb(255, 255, 255);
    }

    img {
        width: 96px;
    }
   
    @media (max-width: 768px){
            display: none;     
    }
`

const NavHeaderLogada = styled.nav`
    width: 30vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img{
        margin-right: 30px;
        width: 96px;
    }
    @media (max-width: 768px){
        width: auto;
        img {
            width: 60px;
            margin: 0;
        }

        .iconeIniciarSessao {
            display: none;
        }
    }
    
`

const ButtonMenu = styled.button`
   display: none;

    @media (max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    width: 40px;
    color: #fff;
    background-color: transparent;
    border: none;
    }
`
const NavMenu = styled.nav`
  position: absolute;
  background-color: #272421;
  width: 90%;
  top: 15vh;
  left: 0;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  ul{
    height: 40vh;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    li{
        width: 100%;
        border-bottom: solid 1px #b8b8bc42;
        padding-bottom: 10px;

    }
    a{
        color: #fff;
        text-decoration: none;
        font-size: 25px;
        text-shadow: 2px 2px 4px #000;
    }
  }
`

export default function HeaderLogada () {

    const [abrirMenu, setAbrirMenu] = useState(false);

    const [menuAberto, setMenuAberto] = useState(false);

    function alternarMenu() {
        setAbrirMenu(!abrirMenu);
        setMenuAberto(!menuAberto);
    }

    return(
        <HeaderContainer>
            <div> {/*RESPONSIVO */}
                <ButtonMenu  onClick={alternarMenu} >{abrirMenu ? "✖" : "☰"}</ButtonMenu>
                {menuAberto && 
                (<NavMenu>
                    <ul>
                        <li>
                            <Link to="/iniciarSessao">Iniciar Sessão</Link>
                        </li>
                        <li>
                            <Link to="/cursos">Cursos</Link>
                        </li>
                        <li>
                            <Link to="/comunidades">Comunidades</Link>
                        </li>
                        <li>
                            <Link to="/mentorias">Mentorias</Link>
                        </li>
                    </ul>
                </NavMenu>)}
            </div>

            <DivHeader> {/*DESKTOP */}
                <Link to="/"><img src={LogoVaiNaDelas} alt="Logo da Vai na Delas" />  </Link>                               
            <NavHeader>
                    <li>
                        <Link to="/cursos">Cursos</Link>
                    </li>
                    <li>
                        <Link to="/comunidades">Comunidades</Link>
                    </li>
                    <li>
                        <Link to="/mentorias">Mentorias</Link>
                    </li>
             </NavHeader>
           </DivHeader>
           <NavHeaderLogada>
                    <li>
                        <Link to="/iniciarSessao" className="iconeIniciarSessao"><img src={iconeIniciarSessao} alt="Ícone de Iniciar Sessão" /></Link>
                    </li>
                    <li>
                        <Link to="/perfil"><img src={iconeUsuarioLogado} alt="Ícone de Usuário Logado" /></Link>
                    </li>
             </NavHeaderLogada>
        </HeaderContainer>
    )
}