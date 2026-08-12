import withDataFetching from "../DataFetchingFunctionalComponent";
//import withDataFetching from "../DataFetchingClassComponent";

const ClientsList = ({ data: clients }) => {
  return (
    <div>
      <h2>Clients</h2>
      <ul className="list">
        {clients.map((client) => (
          <li key={client.id}>
            <p>
              #{client.id} {client.name}
            </p>
            <p>{client.sex}</p>
            <p>
              {Intl.DateTimeFormat("en-US").format(new Date(client.birthday))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// DataFetchingFunctionalComponent
const ClientsListWithData = withDataFetching(
  "Client",
  ClientsList,
  "/bootcamp/santander/clients",
);

// DataFetchingClassComponent
// const ClientsListWithData = withDataFetching(
//   "Client",
//   ClientsList,
//   "/bootcamp/santander/clients",
// );

export default ClientsListWithData;
