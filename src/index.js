import React from 'react';
import { render } from 'react-dom';

// function SaludarEnIdiomas(idioma){
//   if(idioma==='en') {
//     return <span>Hello</span>
//   }
//   else{
//     return <span>Hola</span>

//   }
// }

const Saludo = () => {
  const nombre = "Kevin";
  const idioma = 'es';
  //Esto es otra manera de hacer un if 
  // return <div> 
  //   {
  //     idioma == 'es' && <p>Hola</p>
  //   }
  //   {
  //     idioma == 'en' && <p>Hello</p>
  //   }
  // </div>
  //Esta es otra manera
  return <div>
    {
      idioma === 'en' ? <p>Hello</p> : <p>Hola</p>
    }
  </div>
}

const App = () => {
  return <h1>
    Hola mundo aa
    <Saludo/>
  </h1>;
};

render(<App />, document.getElementById('react-app'));