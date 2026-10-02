import './App.css'
import { Button } from './components/Button'
//import { DarkModeButton } from './components/DarkModeButton'
import { SwitchThemeButton } from './components/SwitchThemeButton'

function App() {
  const handleHoursButtonClick = () =>{
    const currentDateTime = new Date();
    alert(`Agora são ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`)
  }

  return (
    <>
      <h3>Selecione o seu tema preferido</h3>
      <SwitchThemeButton theme='light'>☀️</SwitchThemeButton>
      <SwitchThemeButton theme='dark'>🌙</SwitchThemeButton>
      <Button onClick={handleHoursButtonClick}>Que horas são?</Button>
     
    </>


    
  )
}

export default App
