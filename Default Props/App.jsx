import React from 'react';
import Child from "./Child";

const App = () => {
    return (
        <div>
            <Child name="shashi" id={22}/>
            <Child name="abhishek" id={41} sal={75324}/>
            <Child name="muthu" id={25} sal={357}/>
        </div>
    );
};

export default App;