import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import googleLogo from '../../images/google.png';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleNewPasswordBlur = event => {
        setNewPassword(event.target.value);
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        firebaseError,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/home');
        console.log(user);
    }
    if (firebaseError) {
        setError(firebaseError.message);
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== newPassword) {
            setError('Password not confirmed');
            return;
        }
        if (password.length < 6) {
            setError('Password should have at least 6 characters')
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='flex justify-center'>
            <div className='form-container w-[500px] p-8 my-12'>
                <h3 className='text-[35px] text-[#2A414F] text-center mb-[30px]'>Please Sign Up!!</h3>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label className='block pl-2' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='w-full p-2' type="email" name="email" id="email" placeholder='Your Email' required />
                    </div>
                    <div className="input-group mt-[20px]">
                        <label className='block pl-2' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} className='w-full p-2' type="password" name="password" id="password" placeholder='New password' required />
                    </div>
                    <div className="input-group mt-[20px]">
                        <label className='block pl-2' htmlFor="new-password">Confirm Password</label>
                        <input onBlur={handleNewPasswordBlur} className='w-full p-2' type="password" name="password" id="new-password" placeholder='Confirm password' required />
                    </div>
                    <p className='text-red-300'>{error}</p>
                    <input className='input-submit w-full mt-[44px]' type="submit" value="Sign Up" />
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