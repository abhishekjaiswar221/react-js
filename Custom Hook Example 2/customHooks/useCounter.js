const UseCounter = (count, setCount) => {
    let Increment = () => {
        setCount(count + 1)
    }
    let Decrement = () => {
        setCount(count - 1)
    }
    let Reset = () => {
        setCount(0)
    }
    return [count, Increment, Decrement, Reset];
};

export default UseCounter;