import "./App.css";
import Copyright from "./components/InspirationApp/Copyright";
import FancyText from "./components/InspirationApp/FancyText";
import InspirationGenerator from "./components/InspirationApp/InspirationGenerator";
import Item from "./components/Item";

const itemsList = [
  { id: "Meias", name: "Meias", check: true, count: 5 },
  { id: "Blusa de Frio", name: "Blusa de Frio", check: false, count: 2 },
  { id: "Calça", name: "Calça", check: false, count: 7 },
  { id: "Carteira", name: "Carteira", check: true },
  { id: "Escova de Dentes", name: "Escova de Dentes", check: true },
  { id: "Travesseiro", name: "Travesseiro", check: false },
];

function App() {
  return (
    <>
      <div className="list">
        <h1>Itens da Mala</h1>
        {itemsList.map((item) => {
          //if (item.check) return null;

          return (
            <Item
              key={item.id}
              name={item.name}
              check={item.check}
              // count={item.count}
            />
          );
        })}
      </div>
      <div>
        <FancyText title text="Get Inspired App"/>
        <InspirationGenerator>
          <Copyright year={2026} />
        </InspirationGenerator>
      </div>
    </>
  );
}

export default App;
