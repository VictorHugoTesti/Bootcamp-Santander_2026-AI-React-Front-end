interface Props {
  name: string;
  check?: boolean;
  count?: number;
}

const Item: React.FC<Props> = ({ name, check, count }) => {
  // ---------------------------------------- //
  //   if (check) {
  //     return <div className="item">✅ <del>{name}</del></div>;
  //   }
  //   return <div className="item">⬜ {name}</div>;

  // ---------------------------------------- //
    //Condição ? retorna1 : retorna2
    // Condição && retorno
    // *('!!count' - transforma em Boolean)*
  return (
    <div className="item">
      {check ? "✅" : "⬜"}
      {!!count && ` (${count}) - `}
      {check ? <del>{name}</del> : name}
    </div>
  );

  // ---------------------------------------- //
  //   let itemName: React.ReactNode = name;

  //   if (check) {
  //     itemName = <del>{name}</del>;
  //   }
  //   return (
  //     <div className="item">
  //       {check ? "✅" : "⬜"}
  //       {itemName}
  //     </div>
  //   );
};

export default Item;
