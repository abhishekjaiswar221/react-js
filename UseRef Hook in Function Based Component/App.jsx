import React, {useRef} from 'react';

const App = () => {
    let inputRef = useRef("");
    let divRef = useRef("");

    let handleClick = (e) => {
        e.preventDefault();
        let div = divRef.current;
        div.className = "demo";
        console.log(divRef.current);
        inputRef.current.style.backgroundColor = "greenyellow";
        inputRef.current.style.border = "none";
        inputRef.current.style.outline = "none";
        inputRef.current.placeholder = "Enter Username";
    }
    return (
        <div ref={divRef}>
            <form action="">
                <input type="text" name="username" id="username" ref={inputRef}/><br/>
                <button type="submit" onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
};

export default App;