import "./App.css";

interface IProps {
  step: number;
  instruction: string;
}

const stepsInstructions = [
  "Criar função do componente",
  "Exportar e importar a função criada",
  "Finaliza a estrutura do componente",
  "Adicionar interatividade"
];

function Step({ instruction, step }: IProps) {
  console.log("Redenrizou o Step");
  return (
    <li>
      Passo {step}: {instruction}
    </li>
  );
}

function App() {
  const steps = [];
  for(let i = 1; i <= stepsInstructions.length; i++){
    steps.push(<Step key={i} step={i} instruction={stepsInstructions[i - 1]}/>)
  }

  return (
    <>
      <h1>Estrutura de um componente</h1>
      <ul>
          {steps}
      </ul>
    </>
  );
}

export default App;
