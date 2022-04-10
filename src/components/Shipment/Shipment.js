import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const handleNameBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleNewPasswordBlur = event => {
        setNewPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault()
    }
    return (
        <div className='flex justify-center'>
            <div className='form-container w-[500px] p-8 my-12'>
                <h3 className='text-[35px] text-[#2A414F] text-center mb-[30px]'>Shipping Information</h3>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label className='block pl-2' htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} className='w-full p-2' type="text" name="name" id="name" placeholder='Your name' required />
                    </div>
                    <div className="input-group mt-[20px]">
                        <label className='block pl-2' htmlFor="email">Email</label>
                        <input className='w-full p-2' type="email" name="email" id="email" value={user?.email} placeholder='Your Email' required readOnly />
                    </div>
                    <div className="input-group mt-[20px]">
                        <label className='block pl-2' htmlFor="address">Address</label>
                        <input onBlur={handlePasswordBlur} className='w-full p-2' type="text" name="address" id="address" placeholder='Your address' required />
                    </div>
                    <div className="input-group mt-[20px]">
                        <label className='block pl-2' htmlFor="mobile">Mobile</label>
                        <input onBlur={handleNewPasswordBlur} className='w-full p-2' type="text" name="mobile" id="mobile" placeholder='Your mobile' required />
                    </div>
                    <p className='text-red-300'>{error}</p>
                    <input className='input-submit w-full mt-[44px]' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;