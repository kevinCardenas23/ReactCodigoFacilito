import React, { Component } from 'react';
import { render } from 'react-dom';

// const App = () => {
//   return <div>
    
//   </div>
// };

class App extends Component{
  render(){
    return <h1>Hola mundillo!!!</h1>
  }
}

render(<App />, document.getElementById('react-app'));