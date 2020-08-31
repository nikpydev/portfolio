import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-box">
        <figure className="logo-box__fitter">
          <img
            src={require("../img/javascript.png")}
            alt="JavaScript Logo"
            className="logo-box__img"
          />
        </figure>
      </div>
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
