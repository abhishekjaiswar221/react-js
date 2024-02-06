import React, {useState} from 'react';
import Navbar from "./Components/Navbar";

const App = () => {
    let [isLoggedIn, setIsLoggedIn] = useState(true);//true,false
    return (
        <div>
            <Navbar isAuth={{isLoggedIn, setIsLoggedIn}}/>
        </div>
    );
};

export default App;