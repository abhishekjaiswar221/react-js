//Day1:CreateElement Method and JSX.

/*Date:-13-10-2023:*/

//Old createElement() Method:

// import {createElement} from "react";
// import {createRoot} from "react-dom/client";
//
// const section = createElement("section", {id: "container"}, "Log In",
//     createElement("form", {class: "form-control"}, "",
//         createElement("input", {type: "text"}),
//         createElement("br"),
//         createElement("br"),
//         createElement("input", {type: "password", placeholder: "Enter Password"}),
//         createElement("br"),
//         createElement("br"),
//         createElement("button", {id: "btn"}, "Press Mine"),
//     )
// );
// createRoot(document.querySelector("#root")).render(section);

//--------------------------------------------------------------------------------------------

//JSX Method:
// import React from "react";
// import {createRoot} from "react-dom/client";
//
// const section = (
//     <form action="">
//         <input type="text" name="username" id="username" placeholder="Enter Username"/> <br/><br/>
//         <input type="password" name="password" id="password" placeholder="Enter Password"/> <br/><br/>
//         <input type="submit" value="Submit" id="submit-btn"/>
//     </form>
// );
// createRoot(document.querySelector("#root")).render(section);

//--------------------------------------------------------------------------------------------

/*Date:-16-10-2023*/
import React from "react";
import {createRoot} from "react-dom/client";
import image from "./logo.png";

let array = [10, 20, 30, 40, 50];

let num;
let res = true;
if (res)
    num = 100;
else
    num = 200;

let x = 1;

const section = (
    <>
        <h1>Heading1</h1>
        <h1>The number is {num}</h1>
        <h1 className="heading" style={{backgroundColor: "green", color: "violet"}}>Hello World</h1>
        <h2 className="head demo">Heading2</h2>
        <img src={image} alt="image" height={"300px"} width={"300px"}/>
        <h1>The addition of 10 and 20 is {10 + 20}</h1>
        {
            array.map(val => {
                return <span>{val + " "}</span>
            })
        }
        {
            x % 2 === 0 ? console.log("Even") : console.log("Odd")
        }
        <form>
            <label htmlFor="username">Enter Username:</label><br/><br/>
            <input type="text" id="username" name="username" placeholder="Enter Username"/>
        </form>
    </>
);
createRoot(document.querySelector("#root")).render(section);

//--------------------------------------------------------------------------------------------
