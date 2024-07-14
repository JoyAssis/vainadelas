import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from "styled-components"
import App from './App.jsx'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
  li{
    list-style: none;
    cursor: pointer;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
