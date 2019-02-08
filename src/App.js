import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent'
import CharacterComponent from './CharComponent'
class App extends Component {

  state={
    userInput:''
  };
  lengthCalculator = event => {
     this.setState({

        userInput:event.target.value
     });
  };
  render() {

    const style={
        border: '2px solid red'
    }

    let characters=null;
    const string=this.state.userInput;
    const map = Array.prototype.map;
    characters=map.call((string1,index) => {
            return <CharacterComponent>${index}</CharacterComponent>
    });





    return (
      <div className="App" style={style}>
        <input type="text" onChange={this.lengthCalculator} value={this.state.userInput} />
        <p>{this.state.userInput.length}</p>
        <ValidationComponent changed={this.state.userInput.length}/>
        {characters}
      </div>
    );
  }
}

export default App;
