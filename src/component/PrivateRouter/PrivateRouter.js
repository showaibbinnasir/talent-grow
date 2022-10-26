import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext/AuthContext';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthProvider);
    const location = useLocation();
    if(loading){
        return <div>Loading...</div>
    }
    if(!user){
       return <Navigate to='/login' state={{from : location}} replace></Navigate>
    }
    return children;
};

export default PrivateRouter;