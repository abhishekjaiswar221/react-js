import React from "react";

const Navbar = ({ isAuth }) => {
  console.log(isAuth);
  let { isLoggedIn, setIsLoggedIn } = isAuth;
  if (isLoggedIn) {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Shashi</li>
          <li>Log Out</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Sign Up</li>
          <li>Log In</li>
        </ul>
      </div>
    );
  }
};

export default Navbar;