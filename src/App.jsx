import Header from "./Components/Header"
import Cursos from "./Paginas/Cursos"
import Comunidades from "./Paginas/Comunidades"
import Mentorias from "./Paginas/Mentorias"
import PaginaInicial from "./Paginas/PaginaInicial"
import IniciarSessao from "./Paginas/IniciarSessao"
import Perfil from "./Paginas/Perfil"
import MainTwo from "./Components/MainTwo"
import Footer from "./Components/Footer"
import Carousel from "./Components/CarouselHeader"

export default function App () {
  return(
    <>
      <Header/>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<PaginaInicial/>} /> 
              <Route path="/cursos" element={<Cursos/>} /> 
              <Route path="/comunidades" element={<Comunidades />} />
              <Route path="/mentorias" element={<Mentorias />} />
              <Route path="/iniciarSessao" element={<IniciarSessao />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
      </BrowserRouter>
      <Carousel />
      <MainTwo/>
      <Footer />
    </>
  )
}