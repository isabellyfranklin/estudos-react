import './App.css'
import Item from './Item'

const itemsList = [
  { id: "meias", name: "Meias", check: true },
  { id: "escova-de-dente", name: "Escova de dente", check: false },
  { id: "pasta-de-dente", name: "Pasta de dente", check: false },
  { id: "carregador-celular", name: "Carregador de celular", check: true,},
  { id: "blusa-frio", name: "Blusa de frio", check: false },
  { id: "travesseiro", name: "Travesseiro", check: true },
  { id: "camiseta", name: "Camiseta", check: false },
];

function App() {

  return (
    <div className='list'>
      <h1>Itens para colocar na mala</h1>
      {itemsList.map( (item) => {
        return <Item key={item.id} name={item.name} check={item.check}/> 
        })}
    </div>
  )
}

export default App
