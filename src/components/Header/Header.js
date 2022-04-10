import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="nav-container z-10">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/home">
                    <img src={logo} alt="" />
                </Link>
                    <nav>
                        <Link to='/home'>Home</Link>
                        <Link to='/order'>Order</Link>
                        <Link to='/inventory'>Inventory</Link>
                        <Link to='/about'>About</Link>
                    </nav>
                    <div>
                        <Link className='bg-white py-2 px-4 rounded-md' to='/login'>Login</Link>
                    </div>
            </div>
        </div>
    );
};

export default Header;