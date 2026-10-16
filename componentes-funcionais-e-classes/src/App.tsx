import './App.css'
import CounterClassComponent from './components/CounterClassComponent'
import CounterFunctionalComponent from './components/CounterFunctionalComponent'

function App() {

  return (
    <>
     <CounterFunctionalComponent messagem="Funcional Component: "/>
     <CounterClassComponent messagem="Class Component: "/>
    </>
  )
}

export default App
