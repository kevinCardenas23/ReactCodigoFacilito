import React from 'react';
import { render } from 'react-dom';

const nombres = [
  'Uriel',
  'Kevin',
  'Juan',
  'Pedro'
]

const Nombres = () => {
  return <ul>{
    nombres.map((nombre, index) => <li key={index}> {nombre}</li>)
  }</ul>
}

const App = () => {
  return <div>
    <div><Nombres></Nombres></div>
  </div>
};

render(<App />, document.getElementById('react-app'));