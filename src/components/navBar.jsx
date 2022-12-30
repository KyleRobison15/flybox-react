import React from "react";
import flyboxLogo from "/Users/robison/MyDev/React_Projects/flybox-react/src/images/FlyBoxLogo_Free.png";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const renderLoginLinksConditionally = () => {
    const { user } = props;
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
          <NavLink className="nav-link" to="/flybox" user={user}>
            Flybox
          </NavLink>
          <NavLink className="nav-link" to="/profile">
            {user.username}
          </NavLink>
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        </React.Fragment>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
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
          <div className="navbar-nav ms-auto">
            {renderLoginLinksConditionally()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
