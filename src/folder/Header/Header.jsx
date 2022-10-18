import React from 'react';

import Photo from "./../../images/menu-btn.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
        <div className="line"></div>
    <header className="header">
        <div className="container">
            <div className="header__inner border">
                <div className="logo">
                    <a href="#">jet<span>ro</span></a>
                </div>
                <nav className="menu">
                    <a href="#"><img src={Photo} alt=""/></a> 
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact US</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    </div>
  );
}
export default Header;