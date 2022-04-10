import React from 'react';
import {useLocation, Navigate} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const RequiredAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequiredAuth;