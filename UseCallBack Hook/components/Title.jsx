import React from 'react';

const Title = () => {
    console.log("Title component rendered");
    return (
        <div>
            <h1>useCallback Hook</h1>
        </div>
    );
};

export default React.memo(Title);