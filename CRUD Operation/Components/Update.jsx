import axios from 'axios'
import React, {useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'

const Update = () => {
    let [value, setValue] = useState({
        name: "",
        phone: "",
        email: "",
    })
    let {id} = useParams();
    let navigate = useNavigate()
    useState(() => {
        axios.get("http://localhost:3000/users/" + id).then(res => {
            setValue(res.data);
        }).catch(err => console.log(err))
    }, [])
    let handleSubmit = e => {
        e.preventDefault();
        axios.put("http://localhost:3000/users/" + id, value);
        navigate("/");
    }
    return (
        <div id='div-container'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" value={value.name}
                       placeholder='Enter name' onChange={e => {
                    setValue({...value, name: e.target.value})
                }}
                /> <br/>
                <input type="tel" name="phone" id="phone" value={value.phone}
                       placeholder='Enter phone'
                       onChange={e => {
                           setValue({...value, phone: e.target.value})
                       }}
                /> <br/>
                <input type="email" name="email" id="email" value={value.email}
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

export default Update
