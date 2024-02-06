import {useState} from "react";
import NavBar from "./Components/NavBar";

const Child = (props) => {
    console.log(props);
    let [state, setState] = useState(props);
    return (
        <>
            <NavBar state={state}/>
        </>
    );
};
export default Child;