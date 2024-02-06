import React, {useEffect, useRef, useState} from 'react';

const App = () => {
    let divRef = useRef();
    let [text, setText] = useState("text");
    useEffect(() => {

        let Recognition = new window.webkitSpeechRecognition();
        Recognition.addEventListener('result', e => {
            console.log(e);
            let transcript = e.results[0][0].transcript;
            setText(transcript);
        })

        let btn = document.querySelector("button");
        btn.addEventListener('click', e => {
            Recognition.start();
        })
    }, [text]);


    return (
        <div ref={divRef}>
            <h1>{text}</h1>
            <button>Start Recording</button>
        </div>
    );
};

export default App;