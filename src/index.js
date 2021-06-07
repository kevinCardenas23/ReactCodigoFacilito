import React from 'react';
import { render } from 'react-dom';

const Saludo = () => {
  const nombre = "Kevin";
  return <p>Hola {`${nombre}`} </p>;
}

const App = () => {
  return <h1>
    Hola mundo aa
    <Saludo/>
  </h1>;
};

render(<App />, document.getElementById('react-app'));
