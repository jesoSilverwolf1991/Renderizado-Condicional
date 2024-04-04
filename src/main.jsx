import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Components/Saludo.jsx'
import './Components/AlertaVisible.jsx'
import './Components/ComponenteSecreto.jsx'
import './Components/BotonToggle.jsx'
import './Components/ListaDeTareas.jsx'
import './Components/ModoOscuroClaro.jsx'
import './Components/ErrorMessage.jsx'
import './Components/RenderizadorConEstado.jsx'
import './Components/LoginForm.jsx'
import './Components/BotonDeLogin.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
