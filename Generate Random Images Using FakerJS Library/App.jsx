import {useState} from "react";
import {faker} from "@faker-js/faker";

const App = () => {
    let [state, setState] = useState(faker.image.urlLoremFlickr({category: 'animals'}));
    console.log(state);

    let changeState = () => {
        setState(faker.image.urlLoremFlickr({category: 'food'}));
    }

    return (
        <div>
            <img src={state} alt="Image"/>
            <button onClick={changeState}>Change State</button>
        </div>
    )
}

export default App;