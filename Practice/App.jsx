import React, { useLayoutEffect, useRef } from "react";
import global from "./global.css";
const App = () => {
  let secRef = useRef("");
  let divRef = useRef("");

  let handleChange = (e) => {
    e.preventDefault();
    divRef.current.className = "demo";
    secRef.current.style.backgroundColor = "green";
    secRef.current.style.height = "250px";
    secRef.current.style.width = "250px";
    secRef.current.style.border = "5px solid purple";
    secRef.current.borderRadius = "5px";
    secRef.current.borderRadius = "5px";
  };
  return (
    <div ref={divRef}>
      <section ref={secRef} className="section-container"></section>
      <section onMouseOver={handleChange} className="container"></section>
    </div>
  );
};

export default App;
