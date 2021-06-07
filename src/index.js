import React, { useState } from 'react';
import { render } from 'react-dom';

const Button = ()=>{
  const [conteo, setCounter] = useState(0);

  return (
    <div>
      <p>Presionado: {conteo}</p>
      <button onClick={()=>setCounter(conteo+1)}>Clickeame!!!!</button>
    </div>
  )
}

const App = () => {
  return <div><Button/></div>
};

render(<App />, document.getElementById('react-app'));