import React, { Component } from 'react';
import { render } from 'react-dom';

// class App extends Component{
//   render(){
//     return <h1>Hola mundillo!!!</h1>
//   }
// }

const nombres = [
  'Uriel',
  'Pedro',
  'Juan',
  'Felipe',
  'Andres'
]

// const Saludar = ({nombre, idioma}) =>{
const Saludar = ({nombre, idioma = 'es'}) =>{
  const saludo = idioma === 'en' ? 'Hola' : 'Hello';
  return <p>{saludo} {nombre}</p>
}

Saludar.defaultProps = {
  idioma: 'es'
}

const App = () => {
  return <div>
    <Saludar nombre='Kevin' idioma='es'/>
  </div>
};

render(<App />, document.getElementById('react-app'));