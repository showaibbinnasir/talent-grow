import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.init';
import  { signInWithPopup,getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { useEffect } from 'react';


export const AuthProvider = createContext();
const auth = getAuth(app)
const AuthContext = ({children}) => {
    const [dark, setDark] = useState(false)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (profile) => {
        updateProfile(auth.currentUser , profile);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const githubLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('on auth state change' , currentUser);
            
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user, githubLogin, loginProvider,logOut,createUser, loginUser, updateUserProfile, loading, dark, setDark}
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;