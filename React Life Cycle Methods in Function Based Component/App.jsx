import React, {useState} from 'react';
import Child from "./Child";

const App = () => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h1>I am App Component {count}</h1>
            <button type="button" onClick={(e) => {
                // console.log(e);
                setCount(count + 1);
            }}>Increment
            </button>
            {count <= 3 ? <Child count={count}/> : <></>}
        </div>
    );
};

export default App;