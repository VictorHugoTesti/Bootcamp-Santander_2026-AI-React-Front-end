import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ENABLE_LOG, ORGANIZATION_NAME } from './settings';

function App() {
  console.log("REACT_APP_ORGANIZATION_NAME:", process.env.REACT_APP_ORGANIZATION_NAME);
  console.log("REACT_APP_ENABLE_LOG:", Number(process.env.REACT_APP_ENABLE_LOG));
  console.log("REACT_APP_RELEASE_DATE:", new Date(process.env.REACT_APP_RELEASE_DATE!));

  if(ENABLE_LOG) {
    console.log("Nome da Organização:", ORGANIZATION_NAME);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Comando para Criação do projeto: <code>npx create-react-app my-app --template typescript</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
