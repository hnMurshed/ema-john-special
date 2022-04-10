import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)
    console.log(user);

    return (
        <div className="nav-container z-10">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/home">
                    <img src={logo} alt="" />
                </Link>
                <nav>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/order'>Order</CustomLink>
                    <CustomLink to='/inventory'>Inventory</CustomLink>
                    <CustomLink to='/about'>About</CustomLink>
                </nav>
                <div>
                    {
                        user ? <>
                            <span className='text-white mr-1'>{user.email}</span>
                            <button onClick={() => signOut(auth)} className='bg-white py-2 px-4 border rounded-md'>Sign Out</button>
                            <img className='w-[40px] rounded-full' src={user.photoURL} alt="" />
                        </> : <Link className='bg-white py-2 px-4 rounded-md' to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;