// THIS IS THE REFACTORED LOGIN FORM
// WE EXTRACTED ALL THE REUSABLE CODE INTO form.jsx
// FOR LEARNING PURPOSES, TAKE A LOOK AT loginFormOriginal.jsx to see what the code was before we extracted it

import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { NavLink } from "react-router-dom";
import * as authService from "../services/authService";
import withNavigateHook from "./common/withNavigateHook";

export class RegisterForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
    },
    errors: {},
    showPassword: false,
  };

  schema = {
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    email: Joi.string().required().email().label("Email"),
  };

  // Submit the form to the server to register a new user
  doSubmit = async () => {
    // Get the User object from the data in our state object
    try {
      const newUser = this.state.data;
      await authService.register(newUser);
      window.location = "/"; // Must do a full reload of the application here so the app component is mounted again with the logged in user information
    } catch (exception) {
      if (exception.response && exception.response.status === 400) {
        // Get the information about the error from the server response
        const errorMessage = exception.response.data;
        const errors = { ...this.state.errors }; // clone the errors object from our state

        if (
          errorMessage.includes("email") &&
          errorMessage.includes("username")
        ) {
          errors.username = errorMessage;
          errors.email = errorMessage;
        } else if (errorMessage.includes("username")) {
          errors.username = errorMessage;
        } else {
          errors.email = errorMessage;
        }

        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1 className="display-1">Create Your Account</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputElement("email", "Email", "email")}
          {this.renderInputElement("username", "Username")}
          {this.renderPasswordToggleInput("password", "Password")}
          <div className="row">
            <div className="col">
              {this.renderInputElement("firstName", "First Name")}
            </div>
            <div className="col">
              {this.renderInputElement("lastName", "Last Name")}
            </div>
          </div>
          {this.renderSubmitButton("Register")}
        </form>
        <div style={{ paddingTop: 20 }}>
          <p>
            Already have an account? <NavLink to={"/login"}>Login Here</NavLink>
          </p>
        </div>
      </div>
    );
  }
}

export default withNavigateHook(RegisterForm);
