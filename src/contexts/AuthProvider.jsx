import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
// ১. GoogleAuthProvider এবং signInWithPopup ইম্পোর্ট করতে হবে
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup 
} from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    
    // ২. গুগল প্রোভাইডার ডিক্লেয়ার করা
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // ৩. গুগল দিয়ে সাইন ইন করার ফাংশন যোগ করা
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
       signInWithGoogle // ৪. এটা এখানে অবশ্যই দিতে হবে যেন অন্য ফাইল থেকে পাওয়া যায়
    }

    return (
       <AuthContext.Provider value={authInfo}> {/* ৫. .Provider ব্যবহার করা নিরাপদ */}
             {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;