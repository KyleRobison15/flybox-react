import React from "react";

const PasswordToggle = (props) => {
  const getIconClasses = () => {
    let classes = "fa fa-eye";
    return props.showPassword === true ? classes : classes + "-slash";
  };

  return (
    <i
      onClick={props.onPasswordToggle}
      style={{ cursor: "pointer" }}
      className={getIconClasses()}
      aria-hidden="true"
    />
  );
};

export default PasswordToggle;
