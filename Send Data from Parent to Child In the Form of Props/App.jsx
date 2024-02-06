import {useState} from "react";
import Products from "./Products.json";
import Child from "./Child";

const App = () => {
    let [state, setState] = useState({
        username: "shashi",
        id: 23,
        email: "shashi@gmail.com"
    });

    function changeState() {
        setState({
            username: "abhi",
            id: 124,
            email: "abhis@gamil.com"
        })
    }

    let demo = (name) => {
        console.log("I am a demo function");
        return name;
    };

    return (
        <div>
            <Child state={state} products={Products} foo={demo} changedState={changeState}/>
        </div>
    );
};

export default App;