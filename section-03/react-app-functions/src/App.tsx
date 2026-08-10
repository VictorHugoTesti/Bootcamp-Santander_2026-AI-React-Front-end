import "./App.css";
import { Double } from "./components/Double";
import { Sqare } from "./components/Sqare";

function App() {
  return (
    <>
      <Double number={2} />
      <Double number={4} />
      <Sqare number={3} />
      <Sqare number={5} />
    </>
  );
}

export default App;
