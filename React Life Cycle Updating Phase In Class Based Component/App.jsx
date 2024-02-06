import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {count: 0};
        console.log("Constructor");
    }

    handleClick = (e) => {
        this.setState({count: this.state.count + 1});
    };

    componentDidMount() {
        console.log("Mounting Phase");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log(prevState.count);
            return prevState.count;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Update");
        console.log(prevProps, prevState);
    }

    render() {
        console.log("Render");
        return (
            <>
                <h1>{this.state.count}</h1>
                <button type="button" onClick={this.handleClick}>Increment</button>
            </>
        );
    }
}

export default App;