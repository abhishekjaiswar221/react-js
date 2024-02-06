import React from 'react';

const Authentication = (WrappedComponent, string) => {
    let isAuth = true;
    return function () {
        if (!isAuth) {
            return <h1>User is not authenticated</h1>
        }
        return <WrappedComponent val={string}/>
    }
};

export default Authentication;