import React from 'react';
import useInput from "./useInput";

const App = () => {
    let [firstName, bindFirstName, resetFirstName] = useInput("");
    let [lastName, bindLastName, resetLastName] = useInput("");

    let handleSubmit = e => {
        e.preventDefault();
        alert(`Hello ${firstName}${lastName}`);
        resetFirstName();
        resetLastName();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">Enter Firstname</label>{" "}
                <input type="text" name="firstname" id="firstname"
                       {...bindFirstName}
                /><br/><br/>
                <label htmlFor="lastname">Enter Lastname</label>{" "}
                <input type="text" name="lastname" id="lastname"
                       {...bindLastName}
                /><br/><br/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default App;