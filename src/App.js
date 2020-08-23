import React, {Component} from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    titre: 'Mon Catalogue voiture'
  }

  changeTitle = (e) => {
    this.setState({
      titre: 'My New Title'
    })
  }

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre}/>

        <button onClick={this.changeTitle}>Changer le nom en dur</button>
      </div>
    );
  } 
}

export default App;
