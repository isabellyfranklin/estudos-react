import './App.css'
import { Post } from './components/Post'
import imgDogOne from './assets/dog 1.jpg'
import imgDogTwo from './assets/dog 2.jpg'
function App() {
   

  return (
    <>
     <h1>nomeando-propriedades-de-event-handlers</h1>
     <Post 
        imagemSource={imgDogOne}
        alternative='Cachorro de raçã rara'
        user='Cachorro pitadinho'
        text='Hoje foi dia de passear no parque'
        onLikePost={() => alert("Voce curtiu poste de cachorro pitadinho")}
        />
     <Post 
        imagemSource={imgDogTwo} 
        alternative='Dois cachorros de porte pequeno'
        user='Dois Cachorro'
        text='Cachorros de pequeno porte brincando'
        onLikePost={ () => alert("Voce curtiu poste de cachorro pitadinho")}
        />
    </>
  )
}

export default App
