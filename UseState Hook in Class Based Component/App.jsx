// UseState Hook in class based component is Stateful. It means it can handle it own state
import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "abhishek", id: 100, location: "UP", sal: 10000};
        // this.state = 100;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({name: "sachin", id: 120, location: "Mumbai", sal: 20000, skills: "react"});
    }

    render() {
        return (
            <>
                <h1>Details</h1>
                <hr/>
                <h2>Name:{this.state.name}</h2>
                <p>ID:{this.state.id}</p>
                <h3>Location:{this.state.location}</h3>
                <h3>Sal:{this.state.sal}</h3>
                {/*{<h1>{this.state}</h1>}*/}
                <h4>Skills:{this.state.skills}</h4>
                <button onClick={this.handleChange}>Change</button>
            </>
        )
    }
}

export default App;