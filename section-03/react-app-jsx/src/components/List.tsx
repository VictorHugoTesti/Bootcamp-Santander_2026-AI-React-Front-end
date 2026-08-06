import './App.css'
import heroImg from "../assets/hero.png";

export function List() {
  return (
    <>
      <h1>Feria | Lista de Compras</h1>
      <img src={heroImg} alt="Hero" className="image" />
      <ul className="list">
        <li>Banana</li>
        <li>Maça</li>
        <li>Alface</li>
        <li>Batata</li>
        <li>Tomate</li>
        <li>Pera</li>
      </ul>
    </>
  );
}
