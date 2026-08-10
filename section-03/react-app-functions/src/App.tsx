import "./App.css";
// import { Double } from "./components/Double";
// import { Sqare } from "./components/Sqare";

interface StepProps {
  step: number
  instruction: string
}

let step = 0;

function Stpe({instruction}: StepProps) {
  //Errado: Alterando uma Variável ja existente antes da Função
  //step = step + 1
  
  return (
    <li>Passo {step}: {instruction}</li>
  )
}

function App() {
  return (
    <>
      <h1>Estrutura de um Componente</h1>
      <ul>
        <Stpe step={1} instruction="Criar função do componente" />
        <Stpe step={2}instruction="Exportar e Importar Função Criada" />
        <Stpe step={3}instruction="Finalizar Estrutura" />
        <Stpe step={4}instruction="Adicionar Interações" />
      </ul>
    </>
  );
}

export default App;
