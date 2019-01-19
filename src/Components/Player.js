import React, { Component } from 'react'
import Counter from './Counter';

export default class Player extends Component {
    render() {
        return (
            <div className="player">
                <span className="player-name">
                {/* since this is the specific player we can access its prop id and include it as a paramater */}
                    <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
                    {this.props.name}
                </span>
                <Counter />
            </div>
        )
    }
}
