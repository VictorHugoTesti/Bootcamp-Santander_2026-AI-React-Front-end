import { useState } from "react";

interface Props {
  name: string;
  check?: boolean;
  //   count?: number;
}

const Item: React.FC<Props> = ({ name, check }) => {
  const [isCkecked, setCkeck] = useState(check);

  const handleClick = () => {
    //true -> false | false -> true
    setCkeck(!isCkecked);
  };

  let itemName: React.ReactNode = name;

  if (isCkecked) {
    itemName = <del>{name}</del>;
  }

  return (
    <div className="item" onClick={handleClick}>
      {isCkecked ? "✅" : "⬜"}
      {itemName}
    </div>
  );

  // ---------------------------------------- //
  //     //Condição ? retorna1 : retorna2
  //     // Condição && retorno
  //     // *('!!count' - transforma em Boolean)*
  //   return (
  //     <div className="item">
  //       {check ? "✅" : "⬜"}
  //       {!!count && ` (${count}) - `}
  //       {check ? <del>{name}</del> : name}
  //     </div>
  //   );

  // ---------------------------------------- //
  //   if (check) {
  //     return <div className="item">✅ <del>{name}</del></div>;
  //   }
  //   return <div className="item">⬜ {name}</div>;
};

export default Item;
