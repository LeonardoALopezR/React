import React from "react";

class App extends React.Component {
    state = {
        message: "Hello react"
    }
    render() {
        return (
            <div className="App">
                <h1>{this.state.message}</h1>
                <button
                    onClick={e => this.setState({message: "Hello World"})}>
                    Change Message</button>
            </div>
        );
    }
}