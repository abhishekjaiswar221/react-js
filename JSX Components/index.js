//JSX components and importing jsx components and css
import {createRoot} from "react-dom/client";
import App from "./App";
import "./global.css";//Way to link the css

createRoot(document.querySelector("#root")).render(<App/>);