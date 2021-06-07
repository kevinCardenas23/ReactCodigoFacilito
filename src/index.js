import React, { useState } from 'react';
import { render } from 'react-dom';

const Form = () =>{
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");

  return (
    <form >
      <div>
        <label for='title'>Titulo </label>
        <input type="text" id='title' onChange={(ev)=>{setTitle(ev.target.value)}}/>
      </div>
      <div>
        <label for="body">Publicacion</label>
        <textarea id="body" onChange={(ev)=>{setBody(ev.target.value)}}></textarea>
      </div>
      <input type="submit" value="Enviar" />
    </form>
  )
}

const App = () => {
  return(
    <Form></Form>
  );
};

render(<App />, document.getElementById('react-app'));