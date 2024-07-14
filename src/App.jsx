import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderLogada from "./Components/HeaderLogada"
import Comunidades from './Paginas/Comunidades'
import Index from './Paginas/index'
import { default as IniciarSessao, default as Perfil } from './Paginas/IniciarSessao'
import Mentorias from './Paginas/Mentorias'
import Progresso from './Paginas/Progresso'
import Footer from "./Components/Footer"
import Login from "./Components/Login"


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
              <Route path="/progresso" element={<Progresso />} />
              <Route path="/login" element={<Login/>} />
            </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}