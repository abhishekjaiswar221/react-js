import React, {useEffect, useState} from 'react';

const Child = ({count}) => {
    let [state, setState] = useState(0);
    console.log(count);
    useEffect(() => {
        console.log("Mounting Phase");
        return () => {
            console.log("Unmounting Phase");
        };
    }, [count, state]);
    return (
        <>
            <div>
                <h1>I am from Child Component {count}</h1>
            </div>
            <section>
                <h1>{state}</h1>
                <button type="button" onClick={() => {
                    setState(state + 1);
                }}>
                    Increment 2nd
                </button>
            </section>
        </>
    );
};

export default Child;