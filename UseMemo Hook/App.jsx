import React, {useEffect, useMemo, useState} from 'react';
//To avoid the unnecessary function call we use useMemo hook
const App = () => {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);
    const double = useMemo(() => {
        return foo(count)
    }, [count]);

    let handleStyle = useMemo(() => {
        return {
            background: dark ? "#111111" : "#ffffff",
            color: dark ? "#ffffff" : "#111111"
        }
    }, [dark])

    useEffect(() => {
        console.log("Mounted");
    }, [handleStyle]);

    return (
        <React.Fragment>
            <input type="number" name="num" id="num" onChange={(e) => {
                setCount(prevState => prevState + 1)
            }}/>

            <button onClick={(e) => {
                setDark(prevState => !prevState)
            }}>Change
            </button>

            <h1 style={handleStyle}>{double}</h1>
        </React.Fragment>
    );
};

function foo(num) {
    for (let i = 0; i <= 10000000; i++) {

    }
    return num * 2;
}

export default App;