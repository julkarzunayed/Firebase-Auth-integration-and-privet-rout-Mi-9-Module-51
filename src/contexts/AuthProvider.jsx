import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut 
} from 'firebase/auth';
import { auth } from '../firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //Create a Firebase User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Sign in a user to site 
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password);
    }

    //Sign in with Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // onAuthStateChanged(auth, currentUser => {
    //     if(currentUser){
    //         console.log( "Current user: ", currentUser);
    //     }
    //     else{
    //         console.log("current user")
    //     }
    // })

    //Keep a user Signed in to site
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("inside the useEffect: ", currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])


    //Sign Out a user By FireBase
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    const userInfo = {
        user,
        loading,
        createUser,
        singInUser,
        signInWithGoogle,
        signOutUser
    }

    return (
        <AuthContext value={userInfo}>  
            {children}
        </AuthContext>
    );
};

export default AuthProvider;