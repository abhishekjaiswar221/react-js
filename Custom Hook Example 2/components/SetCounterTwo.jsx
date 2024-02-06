import React, {useState} from 'react';
import useCounter from "../customHooks/useCounter";

const SetCounterTwo = () => {
    const [count, setCount] = useState(0);
    let [Count, Increment, Decrement, Reset] = useCounter(count, setCount);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            {" "}
            <button onClick={Decrement}>Decrement</button>
            {" "}
            <button onClick={Reset}>Reset</button>
        </div>
    );
};

export default SetCounterTwo;