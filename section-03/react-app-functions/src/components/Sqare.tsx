interface Props {
  number: number;
}

export function Sqare({ number }: Props) {

  return (
    <div>
      <p>
        <b>Numero: </b>
        {number} - <b>Quadrado:</b> {Math.pow(number, 2)}
      </p>
    </div>
  );
}
