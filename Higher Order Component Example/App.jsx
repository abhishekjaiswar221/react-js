import React from 'react';
import Users from "./components/Users";
import Todo from "./components/Todo";
import "./global.css";

const App = () => {
    return (
        <section id={"container"}>
            <div>
                <Users/>
            </div>
            <div>
                <Todo/>
            </div>
        </section>
    );
};

export default App;