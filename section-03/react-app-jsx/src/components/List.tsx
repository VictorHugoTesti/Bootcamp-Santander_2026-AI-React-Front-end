
export function List() {
  const ListDetails = {
    name: 'Victor',
    day: formatDate(new Date())
  }

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
      <h1>Feria | Lista de Compras do {ListDetails.name}</h1>
      <p><b>Dia de Feira:</b> {formatDate(new Date()) /* {ListDetails.day} */}</p>
      <ul style={{ color: 'purple', backgroundColor: 'gray', textAlign: 'left' }}>
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
