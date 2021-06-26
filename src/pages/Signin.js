import React, { useState } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Login from "../components/Login";

function Signin() {
  const [userIn, setuserIn] = useState(
    JSON.parse(localStorage.getItem("pageRedirect"))
  );
  return (
    <div>
      {userIn ? (
        <div>
          <Header setUserIn={setuserIn} />
          <Home setUserIn={setuserIn} />
        </div>
      ) : (
        <Login setUserIn={setuserIn} />
      )}
    </div>
  );
}

export default Signin;
