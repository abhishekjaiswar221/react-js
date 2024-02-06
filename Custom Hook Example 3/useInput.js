import {useState} from 'react';

const UseInput = (currentVal) => {
    const [val, setVal] = useState(currentVal)
    let reset = () => {
        setVal(currentVal);
    }

    let bind = {
        value: val,
        onChange: e => {
            setVal(e.target.value);
        }
    }
    return [val, bind, reset];
};

export default UseInput;