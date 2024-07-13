import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderLogada from "./Components/HeaderLogada"
import Comunidades from './Paginas/Comunidades'
import Index from './Paginas/index'
import { default as IniciarSessao, default as Perfil } from './Paginas/IniciarSessao'
import Mentorias from './Paginas/Mentorias'
import Footer from "./Components/Footer"


export default function App () {
  return(
    <>
      <BrowserRouter>
        <HeaderLogada/>
            <Routes>
              <Route path="/" element={<Index/>} />
              <Route path="/comunidades" element={<Comunidades />} />
              <Route path="/mentorias" element={<Mentorias />} />
              <Route path="/iniciarSessao" element={<IniciarSessao />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}