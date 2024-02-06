//Event Handlers in React:
//How to pass the custom arguments function in the events:
import React from 'react';
import global from "./global.css";

const App = () => {
    let handleClick = (username, password) => {
        console.log(username, password);
    };
    return (
        <div onClick={() => handleClick("muthu", 12345)} id={"container"}>
            Div Container
        </div>
    );
};

export default App;