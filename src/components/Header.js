import React from 'react';
import '../css/Header.css';
import Navbar from './Navbar';

function Header() {
    return (
        <div className="header">
            <Navbar />
            <div className="header__text">
                <h1>MAINE'S <span className="header__colorText">PREMIUM</span>GYM</h1>
                <p>The Fitness Factory</p>
            </div>
            <div className="header__button">
                <button>Join Now</button>
            </div>
        </div>
    )
}

export default Header
