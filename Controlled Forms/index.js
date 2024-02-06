/*
Controlled Forms:
1. useRef()-->❌
2. useState()-->✅
3. onChange-->✅
4. onSubmit-->✅
 */
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
