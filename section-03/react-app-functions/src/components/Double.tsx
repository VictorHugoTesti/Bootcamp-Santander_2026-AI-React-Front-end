interface Props {
  number: number;
}

export function Double({ number }: Props) {

  return (
    <div>
      <p>
        <b>Numero: </b>
        {number} - <b>Dobro:</b> {number * 2}{" "}
      </p>
    </div>
  );
}
