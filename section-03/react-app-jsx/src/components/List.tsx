
export function List() {
  const name = "Victor"

  function formatDate(date: Date): React.ReactNode {
    const formatedDate = new Intl.DateTimeFormat (
      'pt-BR',
      { weekday: 'long' }
    ).format(date)

    console.log(formatedDate)
    return formatedDate
  }

  return (
    <>
      <h1>Feria | Lista de Compras do {name}</h1>
      <p><b>Dia de Feira:</b> {formatDate(new Date())}</p>
      <ul>
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
