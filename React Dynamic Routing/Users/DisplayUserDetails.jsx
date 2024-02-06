import React from 'react';
import {useParams} from "react-router-dom";

const DisplayUserDetails = () => {
    let {userId} = useParams();
    console.log(userId);
    console.log(typeof userId);
    return <h1>User Details {userId}</h1>
};

export default DisplayUserDetails;