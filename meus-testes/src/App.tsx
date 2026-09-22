import './App.css'
import { Group } from './components/Group'
import blackPink from './assets/blackpink.avif'
import aespa from './assets/aespa.jpg'
import twice from './assets/twice.jpg'

function App() {

  return (
    <>
      <Group 
        imagem={blackPink} 
        nameGroup='BlackPink' 
        totalMembers={4} 
      />
      <Group
        imagem={aespa}
        nameGroup='Aespa'
        totalMembers={4}
      />
      <Group
        imagem={twice}
        nameGroup='TWICE'
        totalMembers={9}
      />
    </>
  )
}

export default App
