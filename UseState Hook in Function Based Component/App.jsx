// UseState Hook in function based component is Stateless.
// It means it can not handle it own state but in latest versions it is stateful
// it means it can handle it own state.
import {useState} from "react";

const App = () => {
    let [val, setVal] = useState({
        name: "virat", id: 120, sal: 10000
    })
    let [loading, setLoading] = useState(true);
    console.log(loading);
    let {name, id, sal} = val;
    console.log(val);
    let handleChange = () => {
        setVal({name: "sachin", id: 200, sal: 30000});
        setLoading(false);
    }
    return (
        <div>
            <h1>{name}</h1>
            <h2>{id}</h2>
            <h3>{sal}</h3>
            <h4>{loading.toString()}</h4>
            <button onClick={handleChange}>Change</button>
            <span>This is span</span>
        </div>
    )
}

export default App;