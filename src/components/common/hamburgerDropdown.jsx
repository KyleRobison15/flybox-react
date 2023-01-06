import React from "react";
import { Link } from "react-router-dom";

const HamburgerDropdown = ({ items }) => {
  return (
    <div className="dropdown">
      <i
        className="bi bi-list"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></i>
      <ul className="dropdown-menu">
        {items.map((item) => {
          return (
            <li key={item.name}>
              <Link className="dropdown-item" to={item.path}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HamburgerDropdown;
