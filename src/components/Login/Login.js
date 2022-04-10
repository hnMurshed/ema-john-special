import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useSignInWithGoogle from '../../hook/useSignInWithGoogle';
import googleLogo from '../../images/google.png';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signInWithGoogle} = useSignInWithGoogle();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate(from, {replace: true});
    }

    const handleUserLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='flex justify-center'>
            <div className='form-container w-[500px] p-8 my-12'>
                <h3 className='text-[35px] text-[#2A414F] text-center mb-[30px]'>Please Login!!</h3>
                <form onSubmit={handleUserLogin}>
                    <div className="input-group">
                        <label className='block pl-2' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='w-full p-2' type="email" name="email" id="email" placeholder='Your Email' required/>
                    </div>
                    <div className="input-group mt-[20px]">
                        <label className='block pl-2' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} className='w-full p-2' type="password" name="password" id="password" placeholder='Your password' required />
                    </div>
                    <p>{error && error.message}</p>
                    <input className='input-submit w-full mt-[44px]' type="submit" value="Login" />
                    <p className='text-center text-[15px] text-[#2A414F]'>New to Ema-John? <Link to='/signup' className='form-link'>Create New Account</Link></p>
                </form>
                <div className="divider flex items-center justify-center my-[30px]">
                    <div className="line"></div>
                    <span className='px-5 pb-1 text-[17px] text-[#95A0A7]'>or</span>
                    <div className="line"></div>
                </div>
                <button onClick={signInWithGoogle} className='google-btn w-full flex items-center justify-center gap-2'>
                    <img src={googleLogo} alt="" />
                    <span>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;