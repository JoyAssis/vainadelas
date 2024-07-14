import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iconeIniciarSessao from "../assets/iconeIniciarSessao.png";
import iconeUsuarioLogado from "../assets/iconeUsuarioLogado.png";
import LogoVaiNaDelas from "../assets/logoVaiNaDelas.png";
import NaoLogado from "../assets/naologado.png"
import SetaLado from "../assets/setalado.png"
import SetaBaixo from "../assets/setabaixo.png"
import { useNavigate } from "react-router-dom";

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
        &:visited{
            color:#ffffff;
        }
        &:hover{
            color: #943271;
        }
    }

    img {
        width: 96px;
    }
   
    @media (max-width: 768px){
            display: none;     
    }
`
const NavHeaderLogada = styled.nav`

    width: 26vw;
    margin-left:5vw;
    height: 10vh;
    display: flex;
    justify-content: ${(props) => props.isOn ? "space-evenly":"center"};
    align-items: center;
    gap: ${(props)=> props.isOn ? "":"25px"} ;

    a{
        text-decoration:none;
        list-style: none;
        color: rgb(255, 255, 255);
    }

img{
    height: 8vh;
}
    
    @media (max-width: 768px){
        width: auto;
    position: relative;
    right: 7vw;
        img {
            width: 40px;
            height: 40px;
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

const ModalPerfil = styled.img`
width: 1.2vw;
height: 1vh; 
object-fit:contain;
&:hover{
    transform:scale(140%);
}
`
const NavModalPerfil = styled.nav`
display:${(props) => props.isOnNav ? "initial":"none"};
position:absolute;
top:9vh;
right:10vw;
z-index:10;
padding:25px;
border-radius:20px;
background-color:#D9D9D9;


ul{
    display:flex;
    flex-direction:column;
    row-gap:10px;
}
a,li{
    color:#8F2361;
    font-weight:bold;
    font-family:"Signika", sans-serif;
    &:hover{
        transform:scale(108%);
    }
}
`
const IconeHeaderUsuaria = styled.img`
border-radius:100%;
height:3.8vh;
width:3.8vw;
object-fit:cover;
`


export default function HeaderLogada() {

    const [abrirMenu, setAbrirMenu] = useState(false);

    const [menuAberto, setMenuAberto] = useState(false);

    const [navModalPerfil,setNavModalPerfil] = useState(false)

    const [fotoUsuaria,setFotoUsuario] = useState(localStorage.getItem("foto_usuaria") === null ? iconeUsuarioLogado: localStorage.getItem("foto_usuaria"));

    const navigate = useNavigate();


    useEffect(()=>{
        if(localStorage.getItem("login") === null ){
          navigate("/")
        }
      },[])

    console.log(localStorage.getItem("login"))

    const alternarMenu = () => {
        setAbrirMenu(!abrirMenu);
        setMenuAberto(!menuAberto);
    }

    return (
        <HeaderContainer>
            <div> {/*RESPONSIVO */}
                <ButtonMenu onClick={alternarMenu} >{abrirMenu ? "✖" : "☰"}</ButtonMenu>
                {menuAberto &&
                    (<NavMenu>
                        <ul>

                            {/* <li>
                            <Link to="/iniciarSessao">Iniciar Sessão</Link>
                        </li> */}

                            <li>
                                <Link to="/login">Iniciar Sessão</Link>
                            </li>


                            <li>
                                <Link to="/">Cursos</Link>
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
                        <Link to="/">Cursos</Link>
                    </li>
                    <li>
                        <Link to="/comunidades">Comunidades</Link>
                    </li>
                    <li>
                        <Link to="/mentorias">Mentorias</Link>
                    </li>
               

                </NavHeader>
            </DivHeader>

            <NavHeaderLogada isOn={localStorage.getItem("login" === "on" ? true:false)}>
                <li>
                    <Link>
                        <img className="iconeIniciarSessao" src={iconeIniciarSessao} alt=""/>
                    </Link>
                </li>
                {localStorage.getItem("login") === null ? <li>
                    <Link to="/login" className="iconeIniciarSessao"> Iniciar Sessão </Link>
                </li>: ""}
                <li>
                    <Link to={localStorage.getItem("login") === null ? "/login":"/perfil"}><IconeHeaderUsuaria className="iconePepita" src={localStorage.getItem("login") === null ? NaoLogado : fotoUsuaria} alt="Ícone de Usuário Logado" /></Link>
                </li>
               {localStorage.getItem("login") === "on" ? <ModalPerfil onClick={()=> setNavModalPerfil(!navModalPerfil)} src={SetaBaixo} alt=""/>:""}

             <NavModalPerfil isOnNav={navModalPerfil}>
                    <ul>
                        <li>
                            <Link to="/perfil">Meu Perfil</Link>    
                        </li>

                        <li>
                        <Link to="/progresso">Meu Progresso</Link> 
                        </li>

                        <li onClick={()=> {
                            localStorage.removeItem("login");
                            location.reload();
                        }}>Sair da Conta</li>

                    </ul>
                </NavModalPerfil>
            </NavHeaderLogada>
            
        </HeaderContainer>
    )
}