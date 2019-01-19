import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                <span className="stats">Players: {this.props.players.length}</span>
            </header>
        )
    }
}
