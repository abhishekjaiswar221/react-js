import React from 'react';

const Child = ({username, id, skills}) => {
    return (
        <div>
            <h1>{username}</h1>
            <h2>{id}</h2>
            {skills.map((v) => {
                return <span>{v},</span>;
            })}
        </div>
    );
};

export default Child;