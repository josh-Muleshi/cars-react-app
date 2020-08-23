import React, {Component} from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    titre: 'Mon Catalogue voiture'
  }

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre}/>
      </div>
    );
  } 
}

export default App;
