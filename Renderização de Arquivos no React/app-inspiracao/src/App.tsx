import './App.css'
import CopyRight from './components/CopyRIght'
import FancyText from './components/FancyText'
import InspirationGenerator from './components/InspirationGenerator'

function App() {

  return (
    <>
      <FancyText title={true} text='App de Inspiração'/>
      <InspirationGenerator>
        <CopyRight year={2024}/>
      </InspirationGenerator>
    </>
  )
}

export default App
