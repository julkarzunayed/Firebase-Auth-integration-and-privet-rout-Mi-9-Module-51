import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='text-center mt-10' >
            <h2>{user.email}</h2>
            <p>{user.photoURL}</p>
            <img src={user.photoURL} alt="Image" />
        </div>
    );
};

export default Dashboard;