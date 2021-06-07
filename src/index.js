import React, { useState } from 'react';
import { render } from 'react-dom';

const Saludo = ()=>{
  const [name, setName] = useState("");

  return (
    <div>
      <input type="text" onChange={(ev)=>{setName(ev.target.value)}}/>
      <p>Hola {name}</p>
    </div>
  )
}

const App = () => {
  return(
    <Saludo></Saludo>
  );
};

render(<App />, document.getElementById('react-app'));