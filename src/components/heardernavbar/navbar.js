import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../static/assets/Images/Logo/logo_transparent_background.png";

export default class Navbar extends Component {
  render() {
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

          <div className="nav-wrapper__link">
            <NavLink to="/pictures" activeClassName="nav-link-active">
              Pictures
            </NavLink>
          </div>

          <div className="nav-wrapper__link">
            <NavLink to="/documents" activeClassName="nav-link-active">
              Documents
            </NavLink>
          </div>

          <div className="nav-wrapper__link">
            <NavLink to="/login" activeClassName="nav-link-active">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
