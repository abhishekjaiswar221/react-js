import React from 'react';
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./ Components/Login";
import Profile from "./ Components/Profile";

const App = () => {
    return (
        <UserContextProvider>
            <Login/>
            <Profile/>
        </UserContextProvider>
    );
};

export default App; 