import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext/AuthContext';

import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup 
} from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            // if(currentUser?.email){
            //     const userData = {email : currentUser.email};
            //     axios.post('http://localhost:3000/jwt', userData)
            //     .then(res => {
            //         console.log('Token after jwt',res.data);
            //         const token = res.data.token;
            //         localStorage.setItem('token', token);
            //     })
            //     .error(error => {
            //         console.log(error);
            //     })
           // }
            console.log("User in the auth state change", currentUser);
        })
        return()=> {
            unSubscribe();
        }
    }, [])

    const authInfo ={
       loading,
       user,
       createUser,
       signInUser,
       signOutUser,
       signInWithGoogle 
    }

    return (
       <AuthContext.Provider value={authInfo}> 
             {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;