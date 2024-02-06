import React, {useState} from "react";

document.body.style.backgroundColor = "#2b2b2b";
document.body.style.color = "#ffffff";

const App = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter Username: </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <br/>
                <br/>
                <label htmlFor="password">Enter Password: </label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <br/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default App;
