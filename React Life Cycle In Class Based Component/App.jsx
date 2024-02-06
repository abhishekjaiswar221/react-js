import React, {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {user: []};
        console.log("I am Constructor");
    }

    // componentWillUnmount() {
    //     console.log("I am componentWillUnmount() Method");
    // }
    //
    // static getDerivedStateFromProps() {
    //     console.log("I am getDerivedStateFromProps() Method");
    // }

    componentDidMount() {
        //Used to handel the side effects.
        console.log("I am componentDidMount() Method");
        // let div = document.getElementById("container");
        // console.log(div);
        let data = fetch("https://api.github.com/users");
        // console.log(data);
        data.then((response) => {
            let finalData = response.json();
            // console.log(finalData);
            finalData.then((value) => {
                this.setState({user: value});
                console.log(this.state);
            });
        }, (err) => {
            throw err;
        });
    }

    render() {
        console.log("I am Render Method");
        return (
            <div id="container">
                {
                    this.state.user.map((val, ind) => {
                        return <h1 key={ind + 1}>{val.login}</h1>
                    })
                }
            </div>
        );
    }
}
