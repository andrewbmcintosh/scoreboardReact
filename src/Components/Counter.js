import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        score: 0
    };
    // the below = () => { } binds incrementScore to the Counter Component
    incrementScore = () => {
        // lets react know that state has changed and that it should re-render
        // and make changes to the component based on the change in state
        this.setState(prevState => ({
            score: prevState.score + 1

            // you pass in the part of the state that you want to change
            // we need to bind
        }));
    }
    decrementScore = () => {
        // lets react know that state has changed and that it should re-render
        // and make changes to the component based on the change in state
        //    when we add prev state what it is doing is taking that state
        // and then calling it prev.state

        this.setState(prevState => ({
            // you pass in the part of the state that you want to change
            // we need to bind
            score: prevState.score - 1
        }));
    }
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>

            </div>
        )
    }
}

