import React, { Component } from "react";
import flyboxLogo from "/Users/robison/MyDev/React_Projects/flybox-react/src/images/FlyBoxLogo_Free.png";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  renderLoginLinksConditionally = () => {
    const { user } = this.props;
    if (!user) {
      return (
        <React.Fragment>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavLink className="nav-link">{user.username}</NavLink>
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={flyboxLogo} alt="FlyBox Logo" width="50" height="50" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              {this.renderLoginLinksConditionally()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
