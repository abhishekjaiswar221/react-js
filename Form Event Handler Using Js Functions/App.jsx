import React from 'react';

const App = () => {
    let handleSubmit = (e) => {
        e.preventDefault();
        let username = document.getElementById("username");
        let password = document.getElementById("password");
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        console.log(username.value);
        console.log(password.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="username"/><br/><br/>
                <input type="password" name="password" id="password"/><br/><br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default App;