import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const Home = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/users`).then(res => {
            let {data} = res;
            setData(data);
        }).catch(err => {
            console.log(err);
        })
    }, [data])
    let handleClick = (id) => {
        axios.delete("http://localhost:3000/users/" + id).then(res => {
            window.location.reload();
        })

    }
    return (
        <div id='container'>
            <div className='add_users'>
                <button><Link to="/create">Add++</Link></button>
            </div>
            <table className='table'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((v, i) => {
                    let {id, name, phone, email} = v;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{phone}</td>
                            <td>{email}</td>
                            <td>
                                <button className='read'><Link to={`/read/${id}`}>Read</Link></button>
                                <button className='edit'><Link to={`/update/${id}`}>Edit</Link></button>
                                <button className='delete' onClick={e => handleClick(id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Home
