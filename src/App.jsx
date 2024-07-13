import { BrowserRouter, Routes, Route} from "react-router-dom"
import Cursos from "./Paginas/Cursos"
import Comunidades from "./Paginas/Comunidades"
import Mentorias from "./Paginas/Mentorias"
import PaginaInicial from "./Paginas/PaginaInicial"
import IniciarSessao from "./Paginas/IniciarSessao"
import Perfil from "./Paginas/Perfil"

export default function App () {
  return(
    <>
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
    </>
  )
}
