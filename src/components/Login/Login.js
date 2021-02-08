import React from "react";
import { Link } from "react-router-dom";
import { loginUrl } from "../../spotify";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__spotifyLogo">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="logo"
        />
      </div>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
