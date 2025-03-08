import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsuariosConSuscripciones from './UsuariosConSuscripciones.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuariosConSuscripciones />
  </StrictMode>,
)
