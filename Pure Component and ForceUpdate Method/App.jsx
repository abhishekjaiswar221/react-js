import React, {Component} from 'react';
import Child from "./Child";

//We cannot give "0" as a value to the state in class based component we can only give an
// object or null.

//If we extend the "Component" class it renders the element again and again if the data is same or different
// on the update of the "state", but if we extend the "PureComponent" class then it will not render the element again and again when
// the data is same on the update of the "state".

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "shashi"};
    }

    render() {
        console.log("Render method from App component");
        return (
            <div>
                <h1>App Component</h1>
                <Child state={this.state.name}/>
            </div>
        );
    }
}

export default App;