import React, {useCallback, useState} from 'react';
import Title from "./components/Title";
import Child from "./Child";
import Button from "./components/Button";

const App = () => {
    const [age, setAge] = useState(23);
    const [sal, setSal] = useState(2000);

    const IncrementSal = useCallback(() => {
        setSal(prevState => prevState + 100);
    }, [sal]);

    const IncrementAge = useCallback(() => {
        setAge(prevState => prevState + 1);
    }, [age]);
    return (
        <>
            <Title/>
            <Child count={age} text={"Age"}/>
            <Button Increment={IncrementAge}>Increment Age</Button>
            <Child count={sal} text={"Salary"}/>
            <Button Increment={IncrementSal}>Increment Sal</Button>
        </>
    );
};

export default App;