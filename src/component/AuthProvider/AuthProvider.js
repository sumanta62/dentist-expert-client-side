import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    const provaiderLogin = (provider) => {
        setLoding(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) =>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin =(email, password) =>{
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut =() =>{
        setLoding(true);
        return signOut(auth);
    }

    const updateUserProfile = profile =>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoding(false)
        });
        return () => {
            unsubsCribe();
        }
    }, [])

   
    const AuthInfo = { user, loding, provaiderLogin, createUser, userLogin, updateUserProfile, logOut};

    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;