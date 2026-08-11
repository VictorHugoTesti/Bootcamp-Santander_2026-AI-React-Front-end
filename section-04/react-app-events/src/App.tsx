import "./App.css";
import { Button } from "./components/Button";
import { Post } from "./components/Network/Post";
import { SwitchThemeButton } from "./components/Theme/SwitchThemeButton";

function App() {
  const handleHoursButtonClick = () => {
    const currentDateTime = new Date();
    alert(
      `Agora são ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`,
    );
  };

  return (
    <>
      <div>
        <h1>Selecione o Tema:</h1>
        <SwitchThemeButton theme="light">☀️</SwitchThemeButton>
        <SwitchThemeButton theme="dark">🌙</SwitchThemeButton>
        <Button onClick={handleHoursButtonClick}>🕝 Que Horas São?</Button>
      </div>
      <div onClick={() => alert("Disparado event handler do componente App")}>
        <Post
          imageSource="https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"
          alternative="Golder Retriver Filhote"
          user="Golden"
          text="Hoje foi dia de Tomar Banho"
        />
        <Post
          imageSource="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D"
          alternative="Trevor na Praia"
          user="Trevor"
          text="Passeando na Praia"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()            
            alert("Formulário Enviado");
          }}
        >
          <input name="e-mail" type="email" />
          <button className="button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
