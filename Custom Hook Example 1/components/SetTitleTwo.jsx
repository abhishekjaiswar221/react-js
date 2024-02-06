import React, {useState} from 'react';
import useSetTitle from "../customHooks/useSetTitle";


const SetTitleTwo = () => {
    const [count, setCount] = useState(0);
    useSetTitle(count);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={e => {
                setCount(prevState => prevState + 1)
            }}>Increase Count
            </button>
        </div>
    );
};

export default SetTitleTwo;