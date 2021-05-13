import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "../heardernavbar/navbar";

function Auth0Login() {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="login-link-wrapper">
      <div className="login-link-wrapper__link">
        <button onClick={loginWithPopup}>Login</button>
      </div>
      <div className="login-link-wrapper__link">
        <button onClick={logout}>Logout</button>
      </div>
      <div className="login-link-wrapper__link">
        <h3>You are {isAuthenticated ? "logged in" : "not logged in"}</h3>
      </div>
    </div>
  );
}

export default class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <NavBar />
        <Auth0Login />
      </div>
    );
  }
}
