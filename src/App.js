import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
class App extends Component {

  state={
    useroutput:[
        {username:'Kimu'},
        {username:'Ijji'},
        {username:'Boo'}
    ]
  };

  switchUsernameHandler = newName =>{
    this.setState({
    useroutput:[
        {username:newName},
        {username:'Ijji'},
        {username:'Boo'}
    ]
  });

  };

  nameChangedHandler = event =>{
    this.setState({
        useroutput:[
            {username: event.target.value},
            {username: 'Ijji'},
            {username:'Boo'}
        ]
      });

  };

  render() {

    const style={
        border: '2px solid red'
    }
    return (
      <div className="App" style={style}>
        <UserOutput click={this.switchUsernameHandler.bind(this, 'Kimaya')} username ={this.state.useroutput[0].username}/>
        <UserOutput username= {this.state.useroutput[2].username}/>
        <UserOutput username={this.state.useroutput[1].username}/>
        <UserInput changed={this.nameChangedHandler}  username={this.state.useroutput[0].username}/>
      </div>
    );
  }
}

export default App;
