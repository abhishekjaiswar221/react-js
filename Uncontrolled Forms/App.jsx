import React, {useRef} from "react";

const App = () => {
    let username = useRef("");
    let password = useRef("");

    let handleClick = (e) => {
        e.preventDefault();
        let uname = username.current.value;
        let pass = password.current.value;
        console.log(uname, pass);
    };
    return (
        <div>
            <form>
                <label htmlFor="username">Enter Username: </label>
                <input type="text" name="username" id="username" ref={username}/>
                <br/>
                <br/>
                <label htmlFor="password">Enter Password: </label>
                <input type="password" name="password" id="password" ref={password}/>
                <br/>
                <br/>
                <button type="submit" onClick={handleClick}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;
