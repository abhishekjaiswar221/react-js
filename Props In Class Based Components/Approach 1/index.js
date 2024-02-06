//Props In Class Based Components -->Properties
//We cannot update the value of props.It is immutable but "states" are mutable we can change or update the value of "states".
//We should use expressions "{}" if our data is other than string and string can be written inside "",'' or ``.
import {createRoot} from "react-dom/client";
import App from "./App";

createRoot(document.querySelector("#root")).render(<App/>);