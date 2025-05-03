import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const SingInUser = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password);
    }

    // onAuthStateChanged(auth, currentUser => {
    //     if(currentUser){
    //         console.log( "Current user: ", currentUser);
    //     }
    //     else{
    //         console.log("current user")
    //     }
    // })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("inside the useEffect: ", currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo = {
        user,
        createUser,
        SingInUser
    }

    return (
        <AuthContext value={userInfo}>  
            {children}
        </AuthContext>
    );
};

export default AuthProvider;