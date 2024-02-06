import React, {useEffect, useState} from 'react';

const App = () => {
    let [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            // console.log(e);
            setSize(window.innerWidth);
            if (size < 1429) {
                document.body.style.backgroundColor = "mediumvioletred";
            } else {
                document.body.style.backgroundColor = "greenyellow";
            }
        });
    });
    return (
        <div>
            <h1>{size}</h1>
        </div>
    );
};

export default App;