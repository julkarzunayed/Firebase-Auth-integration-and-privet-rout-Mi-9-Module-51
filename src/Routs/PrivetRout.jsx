import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRout = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if(loading){
        return <div className="text-center mt-20"><span className="loading loading-bars loading-xl"></span></div>;
    }

    if(!user){
        return <Navigate to="/login"></Navigate>;
    }

    return children ;
};

export default PrivetRout;