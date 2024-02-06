import React, {useRef, useState} from 'react';
import Excuses from "./Video/Excuses.mp4";

const App = () => {
    let videoRef = useRef(null);
    let [playing, setPlaying] = useState(false);
    let [value, setValue] = useState("");
    let handelVideo = (e) => {
        setPlaying(!playing);
        if (playing) {
            videoRef.current.play();
            setValue("Video Is Playing")
        } else {
            videoRef.current.pause();
            setValue("");
        }
    };
    return (
        <div>
            <section>
                <h1>{value}</h1>
                <video src={Excuses} style={{height: "500px", width: "800px"}} ref={videoRef}
                       onClick={handelVideo}></video>
            </section>
        </div>
    );
};

export default App;