import React, {useContext, useState} from 'react';
import UserContext from "../Context/UserContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {user, setUser} = useContext(UserContext);
    let handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" id="username" placeholder="Username" onChange={e => {
                setUsername(e.target.value);
            }}/> <br/><br/>
            <input type="password" name="password" id="password" placeholder="Password" onChange={e => {
                setPassword(e.target.value);
            }}/>
            <br/><br/>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;

