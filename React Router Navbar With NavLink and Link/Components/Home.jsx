import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let n = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          n("order");
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Home;
