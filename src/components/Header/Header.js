import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='/home'>Home</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/inventory'>Inventory</Link>
                    <Link to='/about'>About</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;