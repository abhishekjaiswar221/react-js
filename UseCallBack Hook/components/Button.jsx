import React from 'react';

const Button = ({Increment, children}) => {
    console.log("Button Component" + children);
    return (
        <div>
            <button type="button" onClick={Increment}>{children}</button>
        </div>
    );
};

export default React.memo(Button);