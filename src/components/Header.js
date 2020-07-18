import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="text-section">
        <div className="heading-primary">
          <h1 className="header-1">Hey Hey,</h1>
          <h1 className="header-1" style={{ color: "#128C7E" }}>
            I'm <span className="nikhil-text">Nikhil</span>
          </h1>
        </div>
        <p>
          I'm a Full Stack (MERN) Web Developer who has a passion for web and
          mobile technologies, using programming to solve real-world problems,
          and the outdoors.
        </p>
        <h3 className="header-3">Following are a few of my portfolio projects:-</h3>
      </div>

      <div className="avatar-section">
        <img
          src="./webdev.jpg"
          alt="Web Developer Logo"
          className="avatar-img"
        />
      </div>
    </header>
  );
};

export default Header;
