import React from 'react';
import Authentication from "./Authentication";

const Profile = ({val}) => {
    return (
        <div>
            <h1>Profile Component</h1>
            <h1>{val}</h1>
        </div>
    );
};

export default Authentication(Profile, "profileComponent");
