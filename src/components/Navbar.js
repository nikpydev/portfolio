import React from "react";
import "../css/style.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <figure className="logo-box">
        <img src="./javascript.png" alt="JavaScript Logo" className="logo-box__img" />
      </figure>
      <ul className="nav-list">
        <li className="nav-list__item">
          <a
            href="https://nikpydev.github.io/portfolio"
            className="nav-list__item--link"
          >
            Work
          </a>
        </li>
        <li className="nav-list__item">
          <a
            href="https://github.com/nikpydev"
            className="nav-list__item--link"
          >
            Github Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
