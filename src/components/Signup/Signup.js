import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/google.png';
import './Signup.css';

const Signup = () => {
    return (
        <div className='flex justify-center'>
            <div className='form-container w-[500px] p-8 my-12'>
                <h3 className='text-[35px] text-[#2A414F] text-center mb-[30px]'>Please Sign Up!!</h3>
                <form>
                    <div className="input-group">
                        <label className='block pl-2' htmlFor="email">Email</label>
                        <input className='w-full p-2' type="email" name="email" id="email" placeholder='Your Email' />
                    </div>
                    <div className="input-group mt-[20px]">
                        <label className='block pl-2' htmlFor="password">Password</label>
                        <input className='w-full p-2' type="password" name="password" id="password" placeholder='New password' />
                    </div>
                    <div className="input-group mt-[20px]">
                        <label className='block pl-2' htmlFor="password">Confirm Password</label>
                        <input className='w-full p-2' type="password" name="password" id="password" placeholder='Confirm password' />
                    </div>
                    <input className='input-submit w-full mt-[44px]' type="submit" value="Login" />
                    <p className='text-center text-[15px] text-[#2A414F]'>Already have an account? <Link to='/login' className='form-link'>Login</Link></p>
                </form>
                <div className="divider flex items-center justify-center my-[30px]">
                    <div className="line"></div>
                    <span className='px-5 pb-1 text-[17px] text-[#95A0A7]'>or</span>
                    <div className="line"></div>
                </div>
                <button className='google-btn w-full flex items-center justify-center gap-2'>
                    <img src={googleLogo} alt="" />
                    <span>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Signup;