import {Component} from "react";
//Class based components are also called as  ImpureComponent.
export default class App extends Component {
    state = {value: 0};

    Increment = () => {
        this.setState({value: this.state.value + 1});
    };

    Decrement = () => {
        this.setState({value: this.state.value - 1});
    };

    Reset = () => {
        this.setState({value: 0});
    };

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
                <button onClick={this.Reset}>Reset</button>
            </div>
        );
    }
}