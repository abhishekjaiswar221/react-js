//Install Package-->npm install react-icons --save-dev
import Child from "./Child";
import {BiLogoReact} from "react-icons/bi";

const App = () => {
    return (
        <div>
            <BiLogoReact/>
            <Child username={"sachin"} id={100} sal={20000}/>
        </div>
    );
};
export default App;
