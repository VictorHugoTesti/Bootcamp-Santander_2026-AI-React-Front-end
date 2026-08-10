import "./App.css";
import hero from "./assets/hero.png";
import vite from "./assets/vite.png";
import { Recipe } from "./components/Recipe";

function App() {
  return (
    <>
      <h1 className="title">Receitas</h1>
      <Recipe
        imageSRC={hero}
        coffee={{
          name: "Iced Caramel Macchiato",
          description: "Rico e com toque de baunilha",
          prepareTime: 5
        }}
        imageSIZE={300}
      />
      <Recipe
        imageSRC={vite}
        coffee={{
          name: "Caffé Mocha",
          description: "Uma bebida refrescante com sabor agridoce",
          prepareTime: 3
        }}
      />
    </>
  );
}

export default App;
