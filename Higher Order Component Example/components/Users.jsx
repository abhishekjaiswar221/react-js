import React, {useEffect, useState} from 'react';
import Hoc from "./Hoc";


const Users = ({data}) => {
    // const [user, setUser] = useState([]);
    // const [term, setTerm] = useState("");
    // useEffect(() => {
    //     let fetchData = async () => {
    //         try {
    //             let data = await fetch("https://jsonplaceholder.typicode.com/users", {
    //                 method: "GET"
    //             })
    //             let finalData = await data.json();
    //             setUser(finalData);
    //             console.log(finalData);
    //         } catch (e) {
    //             throw new Error("Not Resolved");
    //         }
    //     }
    //     fetchData();
    // }, []);

    let userRes = data.map((val, ind) => {
        let {name, id} = val;
        return (
            <React.Fragment key={id}>
                <h1>{name}</h1>
            </React.Fragment>
        )
    })

    // let filterUserRes = user.filter(({name}, ind) => {
    //     return name.indexOf(term) >= 0;
    // }).map((val, ind) => {
    //     let {name, id} = val;
    //     return (
    //         <React.Fragment key={id}>
    //             <h1>{name}</h1>
    //         </React.Fragment>
    //     )
    // })
    return (
        <div>
            {/*<input type="text" name="username" id="username" value={term} placeholder={"Search"} onChange={e => {*/}
            {/*    setTerm(e.target.value);*/}
            {/*}}/>*/}
            {userRes}
        </div>
    );
};

export default Hoc(Users, "users");