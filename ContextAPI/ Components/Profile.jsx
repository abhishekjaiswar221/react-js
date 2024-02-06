import React, {useContext} from 'react';
import UserContext from "../Context/UserContext";

const Profile = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>User name:{user.username}</h1>
        </div>
    );
};

export default Profile;