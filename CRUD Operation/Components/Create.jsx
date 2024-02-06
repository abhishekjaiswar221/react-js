import axios from 'axios'
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Create = () => {
    let [value, setValue] = useState({
        name: "",
        phone: "",
        email: ""
    })
    let navigate = useNavigate();
    let handleSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:3000/users`, value).then(res => {
            console.log(res.data);
            navigate("/")
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div id='div-container'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name"
                       placeholder='Enter name' onChange={e => {
                    setValue({...value, name: e.target.value})
                }}
                /> <br/>
                <input type="tel" name="phone" id="phone"
                       placeholder='Enter phone'
                       onChange={e => {
                           setValue({...value, phone: e.target.value})
                       }}
                /> <br/>
                <input type="email" name="email" id="email"
                       placeholder='Enter email'
                       onChange={e => {
                           setValue({...value, email: e.target.value})
                       }}
                /> <br/>
                <button type="submit">submit</button>
                <button type='button'>
                    <Link to="/">Back</Link>
                </button>
            </form>
        </div>
    )
}

export default Create
