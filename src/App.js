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

  changeViaparam = (titre) => {
    this.setState({
      titre: titre
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  }

  changeViaInput = (e) =>{
    this.setState({
      titre: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre}/>

        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={() => this.changeViaparam('titre via param')}>via param</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre via bind')}>via bind</button>
        <input type="text" onChange= {this.changeViaInput} value={this.state.titre}/>
      </div>
    );
  } 
}

export default App;
