import {Component} from "react";
import Child from "./Child";

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Training Center</h1>
                <Child>{/*Difference between <child> tag and data passed in child props */}
                    <h2>Trainer_Name: Shashi</h2>
                    <h3>Skills: Java,Python,Ruby</h3>
                    <h2>Time Duration: 3months</h2>
                </Child>
                <Child>
                    <h2>Trainer_Name: Nagesh</h2>
                    <h3>Skills: Java,Ruby</h3>
                    <h2>Time Duration: 2months</h2>
                </Child>
                <Child>
                    <h2>Trainer_Name: Muthu</h2>
                    <h3>Skills: JavaScript,Python,Ruby</h3>
                    <h2>Time Duration: 4months</h2>
                </Child>
            </div>
        );
    };
}