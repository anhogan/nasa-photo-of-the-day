import React from "react";
import './stylesheets/Header.css';

const Header = () => {

  return (
    <div className="header-container">
      <img className="nasa-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" alt="NASA Logo"></img>
      <div className="headers">
        <h1>NASA</h1>
        <h2>Astronomy Photo of the Day</h2>
      </div>
    </div>
  );
};

export default Header;