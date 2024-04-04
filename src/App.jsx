
import './index.css'
import Saludo from './Components/Saludo'
import AlertaVisible from './Components/AlertaVisible'
import ComponenteSecreto from './Components/ComponenteSecreto'
import BotonToggle from './Components/BotonToggle'
import ListaDeTareas from './Components/ListaDeTareas'
import ModoOscuroClaro from './Components/ModoOscuroClaro'
import ErrorMessage from './Components/ErrorMessage'
import RenderizadoCondicional from './Components/RenderizadorConEstado'
import LoginForm from './Components/LoginForm'
import BotonDeLogin from './Components/BotonDeLogin'


function App() {


  return (
    <>
     <Saludo/>
     <AlertaVisible/>
     <ComponenteSecreto autorizado/>
     <BotonToggle/>
     <ListaDeTareas tareas={['Matematicas','Sociales','Ingles','Ciencias']}/>
     <ModoOscuroClaro/>
     <ErrorMessage error={['Error']}/>
     <RenderizadoCondicional/>
     <LoginForm/> 
     <BotonDeLogin/>
    
    </>
  )
}

export default App
