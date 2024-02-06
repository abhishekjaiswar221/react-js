import React, {useEffect, useState} from 'react';
import Hoc from "./Hoc";


const Todo = ({data}) => {

    // const [todo, setTodo] = useState([]);
    // const [term, setTerm] = useState("");
    // useEffect(() => {
    //     let fetchData = async () => {
    //         try {
    //             let data = await fetch("https://jsonplaceholder.typicode.com/todos", {
    //                 method: "GET"
    //             })
    //             let finalData = await data.json();
    //             setTodo(finalData);
    //             console.log(finalData);
    //         } catch (error) {
    //             throw new Error("Not Resolved");
    //         }
    //     }
    //     fetchData();
    // }, [todo]);

    let todoRes = data.map((val, ind) => {
        let {title, id} = val;
        return (
            <React.Fragment key={id}>
                <h1>{title}</h1>
            </React.Fragment>
        )
    })

    // let filterTodoRes = todo.slice(0, 10).filter(({title}, ind) => {
    //     return title.indexOf(term) >= 0;
    // }).map((val, ind) => {
    //     let {title, id} = val;
    //     return (
    //         <React.Fragment key={id}>
    //             <h1>{title}</h1>
    //         </React.Fragment>
    //     )
    // })
    return (
        <div>
            {/*<input type="text" name="username" id="username" value={term} placeholder={"Search"} onChange={e => {*/}
            {/*    setTerm(e.target.value);*/}
            {/*}}/>*/}
            {todoRes}
        </div>
    );
};

export default Hoc(Todo, "todos");