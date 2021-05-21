import React from "react";
import axios from "axios";
import { withRouter } from 'react-router';
import { NavLink } from "react-router-dom";

import logo from "../../../static/assets/Images/Logo/logo_transparent_background.png";

const Navbar = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-wrapper__link">
        <NavLink to="/pictures" activeClassName="nav-link-active">
          Pictures
        </NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch((error) => {
        console.log("Error Signing out", error);
      });
  };

  return (
    <div className="nav-wrapper">
      <img className="nav-wrapper__img" src={logo} />
      <div className="nav-wrapper__link-wrapper">
        <div className="nav-wrapper__link">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-wrapper__link">
          <NavLink to="/calendar" activeClassName="nav-link-active">
            Calendar
          </NavLink>
        </div>

        {props.loggedInStatus === "LOGGED_IN"
          ? dynamicLink("/pictures", "Pictures")
          : null}

        <div className="nav-wrapper__link">
          {props.loggedInStatus === "LOGGED_IN" ? (
            <a onClick={handleSignOut}>LogOut</a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
