import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="nav-container flex justify-center z-10">
            <nav className="container">
                <a href="/logo">
                    <img src={logo} alt="" />
                </a>
                <div>
                    <a href="/home">Home</a>
                    <a href="/order">Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;