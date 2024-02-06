import {useState} from "react";

const App = () => {
    let [val, setVal] = useState(0);
    let Increment = () => {
        // setVal(val+1);
        // setVal(val+1);

        setVal((p) => p + 1);
        setVal((p) => p + 1);
    };

    let Decrement = () => {
        // setVal(val-1);
        // setVal(val-1);

        setVal((p) => p - 1);
        setVal((p) => p - 1);
    };

    let Reset = () => {
        setVal(0);
    };

    return (
        <>
            <h1>{val}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </>
    );
};

export default App;