import './App.css'

function App() {

  return (
    <form action="" onSubmit={(e) => {
      e.preventDefault();
      e.stopPropagation();
      alert("O formulario foi enviado")
      }}
      >

      <input name="e-mail" type="email" />
      <button className='button' type='submit'>Enviar</button>
    </form>
   
  )

}

export default App
