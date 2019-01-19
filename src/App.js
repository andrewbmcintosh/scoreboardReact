import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Player from './Components/Player';
import PlayerList from './Components/PlayerList';




class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1

      },
      {
        name: "Treasure",
        id: 2

      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

handleRemovePlayer = (id) => {
  this.setState( prevState => {
    return {
      players: prevState.players.filter( p => p.id !== id)
    }
  })
}

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />
        {/* to pass the prop players below you dont have to have that inside the component */}
        <PlayerList players={this.state.players}  removePlayer={this.handleRemovePlayer}/>
      </div>
    );
  }
}

export default App;
