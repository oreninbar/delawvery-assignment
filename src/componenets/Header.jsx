import React from "react";
import '../css/header.css'
import logo from '../img/logo.svg'

const Header = () => {
  return (
    <div className="header-container">
        <img src={logo} alt="delawvery-icon" className="logo" />
    </div>
  );
};

export default Header;