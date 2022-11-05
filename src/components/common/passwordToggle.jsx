import React, { Component } from "react";

class PasswordToggle extends Component {
  getIconClasses = () => {
    let classes = "fa fa-eye";
    return this.props.showPassword === true ? classes : classes + "-slash";
  };

  render() {
    return (
      <i
        onClick={this.props.onPasswordToggle}
        style={{ cursor: "pointer" }}
        className={this.getIconClasses()}
        aria-hidden="true"
      />
    );
  }
}

export default PasswordToggle;
