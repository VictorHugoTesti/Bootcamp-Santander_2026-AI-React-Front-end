import {v4 as uuidv4} from 'uuid' 
import { TopSaleCoffee } from "./TopSaleCoffee";

interface Coffees {
  id: string;
  name: string;
  description: string;
  preparationTime: Number;
}

const coffees: Coffees[] = [
  {
    id: uuidv4(),
    name: "Coffee 1",
    description: "Descripiption 1",
    preparationTime: 2,
  },
  {
    id: uuidv4(),
    name: "Coffee 2",
    description: "Descripiption 2",
    preparationTime: 3,
  },
  {
    id: uuidv4(),
    name: "Coffee 3",
    description: "Descripiption 3",
    preparationTime: 4,
  },
  {
    id: uuidv4(),
    name: "Coffee 4",
    description: "Descripiption 4",
    preparationTime: 5,
  },
  {
    id: uuidv4(),
    name: "Coffee 5",
    description: "Descripiption 5",
    preparationTime: 10,
  },
];

export function List() {
  const listItems = coffees.map((coffee) => (
    <li key={coffee.id}>{coffee.name}</li>
  ));
  const topSale = coffees.filter((coffee) =>
    ["Coffee 3", "Coffee 5"].includes(coffee.name),
  );

  return (
    <>
      <h3 style={{ textAlign: "left" }}>
        <b>Os mais Vendidos: </b>
      </h3>
      <div style={{ textAlign: "left" }}>
        {topSale.map((coffee) => (
          <TopSaleCoffee
            key={coffee.id}
            name={coffee.name}
            description={coffee.description}
          />
        ))}
      </div>
      <ul style={{ textAlign: "left" }}>{listItems}</ul>;
    </>
  );
}
