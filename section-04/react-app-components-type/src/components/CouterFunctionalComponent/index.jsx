import { useState } from "react";

const CounterFunctionalComponent = ({ message }) => {
  const [count, setCount] = useState();

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{message}</h1>
      <h2>Contador: {count}</h2>
      <button className="button" onClick={increase}>Adicionar</button>
    </div>
  );
};

export default CounterFunctionalComponent;
