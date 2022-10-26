import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.init';
import  { signInWithPopup,getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { useEffect } from 'react';


export const AuthProvider = createContext();
const auth = getAuth(app)
const AuthContext = ({children}) => {
    
    const [user, setUser] = useState(null);

    const loginProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const updateUserProfile = (profile) => {
        updateProfile(auth.currentUser , profile);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('on auth state change' , currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user, loginProvider,logOut,createUser, loginUser, updateUserProfile}
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;