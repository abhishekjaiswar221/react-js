//Function based component:

import React from 'react';

const Child = ({username, id, isMarried, skills}) => {
    return (
        <div>
            <h1>Username:{username}</h1>
            <h2>Id:{id}</h2>
            <h3>Marital status:{isMarried ? "Married" : "Unmarried"}</h3>
            <ul>
                {skills.map((v) => {
                    return <li>{v}</li>
                })}
            </ul>
        </div>
    );
};
export default Child;