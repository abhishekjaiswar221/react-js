//Navbar task using JSX components and importing image and giving css to navbar.
import {createRoot} from "react-dom/client";
import App from "./App";
import "./global.css";


createRoot(document.querySelector("#root")).render(<App/>);