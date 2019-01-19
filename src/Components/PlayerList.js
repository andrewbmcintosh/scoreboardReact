import React, { Component } from 'react'
import Player from './Player';

export default class PlayerList extends Component {

    render() {
        return (
            <div>
                {this.props.players.map(player =>
                    <Player
                        name={player.name}
                        id={player.id}
                        score={player.score}
                        removePlayer={this.props.removePlayer}
                    />


                )}
            </div>
        )
    }
}
