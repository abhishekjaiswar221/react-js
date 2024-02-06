//Prop Drilling:
// Prop drilling is a technique in React for passing data from a parent component
// to a child component, and then that child component passes the same data down to
// its own children, and so on

import {createRoot} from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App/>);
