import {createRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import "./global.css";

createRoot(document.getElementById("root")).render(
    <Router>
        <App/>
    </Router>
);
