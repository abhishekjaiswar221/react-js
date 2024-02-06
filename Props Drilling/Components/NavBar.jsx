import {useState} from "react";
import Logo from "./Logo";

const NavBar = ({state}) => {
    console.log(state);
    let [val, setVal] = useState(state);
    return (
        <>
            <Logo val={val}/>
        </>
    );
};

export default NavBar;