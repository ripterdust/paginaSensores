import React from 'react';
// import { Navegacion } from './components/navigationBar/navegación';
import './components/navigationBar/navegación';
import Navegacion from './components/navigationBar/navegación';

export class App extends React.Component {
  render(){
    return(
      <div>
        <Navegacion></Navegacion>
      </div>
    );
  };
}

export default App;
