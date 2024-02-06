import React, { useState } from "react";
import NavBar from "./Components/Navbar";

const App = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <NavBar isAuth={{ isLoggedIn, setIsLoggedIn }} />
    </div>
  );
};

export default App;