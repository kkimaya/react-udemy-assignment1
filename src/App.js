import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharacterComponent from './CharComponent';
class App extends Component {

  state={
    userInput:''
  };
  lengthCalculator = event => {
     this.setState({
        userInput:event.target.value
     });
  };

  deleteOnClickHandler = (index) => {
        const letters=this.state.userInput.split('');
        letters.splice(index,1);
        const updatedText= letters.join('');
        this.setState({
            userInput: updatedText
        });
  };
  render() {

    const style={
        border: '2px solid red'
    }

    let characters=null;
    characters= (this.state.userInput.split('').map((char, index) => {
            return <CharacterComponent character={char} clicked={()=> this.deleteOnClickHandler(index)}/>
    }));


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
