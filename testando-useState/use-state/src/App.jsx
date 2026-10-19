import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [input, setInput] = useState("Nada")

  function darLike(){
   setLikes(prevLikes => prevLikes + 1)
   console.log(likes)
  }

  return (
    <>
      <div>
        <p>Quantidade de likes {likes}</p>
        <button onClick={darLike}>Likes</button>

        <p>O que voce digitou no input {input}</p>
        <input type="text" value={input} onChange={ event => setInput(event.target.value) }/>
      </div>
    </>
  )
}

export default App
