import React, { Component } from 'react';
import Semafaro from './components/semaforo'

class App extends Component {
  render() {
    return (
      <div>
        <Semafaro segundosCorVermellha={9} segundosCorAmarela={2} segundosCorVerde={7}/>
      </div>
    );
  }
}

export default App;