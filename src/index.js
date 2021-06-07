import React from 'react';
import { render } from 'react-dom';

const nombres = [
  'Uriel',
  'Kevin',
  'Juan',
  'Pedro'
]

function getNombres() {
  const elementosLista = [];
  for (var i = 0; i < nombres.length; i++) {
    elementosLista.push(<li>{nombres[i]}</li>)
  }
  return elementosLista
}

const Nombres = () => {
  return <ul>{getNombres()}</ul>
}

const App = () => {
  return <div>
    return <div><Nombres></Nombres></div>
  </div>
};

render(<App />, document.getElementById('react-app'));