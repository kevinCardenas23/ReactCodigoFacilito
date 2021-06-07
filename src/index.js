import React, { useState } from 'react';
import { render } from 'react-dom';
import { useEffect } from 'react/cjs/react.development';

const Button = ()=>{
  const [conteo, setConteo] = useState(0);
  // useEffect(()=>{
  //   console.log("Me ejecute!!!");
  // })
  //Se ejecuta varias veces cuando se actualza el componente

  // useEffect(()=>{
  //   console.log("Me ejecute!!!");
  // },[])
  //Se ejecuta solo al iniciar el componewnte
  //Se eejcuta solo una vez, sie l componente se actualza esto no, se añade un arreglo al final 
  
  useEffect(()=>{
    console.log("Me ejecute!!!");
    return () => {
      console.log("Adios!!!!");
    }
  },[]);
  //Si la funcion retorna otra funcion, esa se ejecuta cuando se elimine el componente
  
  return <button onClick={()=>[setConteo(conteo+1)]}> Hacer CLICK JAJAJA</button>

}

const App = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div>
      <button onClick={ ()=> {setShowButton(false)} }>Eliminar boton</button>
      <div>
        {showButton && <Button/>}
      </div>
    </div>
  )
};

render(<App />, document.getElementById('react-app'));