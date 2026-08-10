import "./App.css";
// import { Double } from "./components/Double";
// import { Sqare } from "./components/Sqare";

interface StepProps {
  step: number
  instruction: string
}

const stepsInstructions = [
  'Criar função do componente',
  'Exportar e Importar Função Criada',
  'Finalizar Estrutura',
  'Adicionar Interações',
  'Testar Aplicação',
]

let step = 0;

function Stpe({instruction}: StepProps) {
  //Errado: Alterando uma Variável ja existente antes da Função
  //step = step + 1
  
  return (
    <li>Passo {step}: {instruction}</li>
  )
}

function App() {
  const steps = []
  for(let i = 1; i <= stepsInstructions.length; i++) {
    steps.push(<Stpe key={i} step={i} instruction={stepsInstructions[i - 1]}/>)
  }

  return (
    <>
      <h1>Estrutura de um Componente</h1>
      <ul>
        {/* <Stpe step={1} instruction="Criar função do componente" />
        <Stpe step={2}instruction="Exportar e Importar Função Criada" />
        <Stpe step={3}instruction="Finalizar Estrutura" />
        <Stpe step={4}instruction="Adicionar Interações" /> */}
        {steps}
      </ul>
    </>
  );
}

export default App;
