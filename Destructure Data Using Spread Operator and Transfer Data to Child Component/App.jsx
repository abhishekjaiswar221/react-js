import React, {useState} from 'react';
import Child from "./Child";

const App = () => {
    let [val, skills] = useState({
        username: "shashi",
        id: 120,
        skills: ["js", "react"]
    });
    return (
        <div>
            <Child {...val}/>
        </div>
    );
};

export default App;