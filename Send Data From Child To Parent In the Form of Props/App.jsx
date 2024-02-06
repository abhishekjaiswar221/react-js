import Child from "./Child";

const App = () => {
    let getData = (name) => {
        console.log(name);
    };

    return (
        <>
            <Child onClick={getData}/>
        </>
    );
};
export default App;


