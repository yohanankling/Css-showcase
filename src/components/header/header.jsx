import React from 'react';
import './header.css'
import {Link} from "react-router-dom";
import HomeImage from "../../assets/home.png";
import AboutImage from "../../assets/info.png";

function Header() {
  return (
      <div className={"header"}>
          <div className={"header-title-div"}>
        <h1 className={"header-title"}>CSS Effects Showcase</h1>
          </div>
          <div className="header-nav">
              <Link to="/">
                  <button className="header-button">
                      <img src={HomeImage} alt="Home" />
                  </button>
              </Link>
              <Link to="/info">
                  <button className="header-button">
                      <img src={AboutImage} alt="About" />
                  </button>
              </Link>
          </div>
      </div>
  );
}

export default Header;