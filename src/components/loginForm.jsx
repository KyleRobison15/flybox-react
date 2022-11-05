// THIS IS THE REFACTORED LOGIN FORM
// WE EXTRACTED ALL THE REUSABLE CODE INTO form.jsx
// FOR LEARNING PURPOSES, TAKE A LOOK AT loginFormOriginal.jsx to see what the code was before we extracted it

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import withNavigateHook from "./common/withNavigateHook";
import * as authService from "../services/authService";

export class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    showPassword: false,
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await authService.login(data.username, data.password);
      window.location = "/"; // Must do a full reload of the application here so the app component is mounted again with the logged in user information
    } catch (exception) {
      if (exception.response && exception.response.status === 401) {
        // Get the information about the error from the server response
        const errorMessage = "Invalid Username or Password";
        const errors = { ...this.state.errors }; // clone the errors object from our state
        errors.username = errorMessage;
        errors.password = errorMessage;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1 className="display-1">Welcome Anglers!</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputElement("username", "Username")}
          {this.renderPasswordToggleInput("password", "Password")}
          {this.renderSubmitButton("Login")}
        </form>
        <div style={{ paddingTop: 20 }}>
          <p>
            Don't have an account?{" "}
            <NavLink to={"/register"}>Register Here</NavLink>
          </p>
        </div>
      </div>
    );
  }
}

export default withNavigateHook(LoginForm);
