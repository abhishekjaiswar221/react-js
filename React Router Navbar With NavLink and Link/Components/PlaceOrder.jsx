import React from "react";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  let n = useNavigate();
  console.log(n);
  return (
    <div>
      <h1>Order Placed Successfully!!</h1>
      <button
        onClick={() => {
          n(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default PlaceOrder;
