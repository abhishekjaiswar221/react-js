import React from 'react';

const Child = ({count, text}) => {
    console.log("Child Component" + text);
    return (
        <div>
            <h1>{text}{" - "}{count}</h1>
        </div>
    );
};

export default React.memo(Child);