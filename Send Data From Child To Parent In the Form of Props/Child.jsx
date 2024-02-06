import {useState} from "react";

const Child = (props) => {
    let [val, setVale] = useState("");
    console.log(props);

    let handleChange = (e) => {
        setVale(e.target.value);
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        props.onClick(val);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" value={val} onChange={handleChange}/><br/><br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Child;