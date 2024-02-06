import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom';

const Read = () => {
    let [data, setData] = useState("");
    let {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`).then(res => {
            setData(res.data)
        })
    }, [])
    return (
        <div>
            <h1>name: {data.name}</h1>
            <h2>phone: {data.phone}</h2>
            <h1>email: {data.email}</h1>
            <button><Link to={`/update/${id}`}>Edit</Link></button>
            <button><Link to="/">Back</Link></button>
        </div>
    )
}

export default Read
