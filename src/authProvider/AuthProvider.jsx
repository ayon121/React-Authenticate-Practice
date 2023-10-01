import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth  , signInWithEmailAndPassword , onAuthStateChanged , signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.init";
export const  AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [loading , setloading] = useState(true)
    const [user , Setuser] = useState(null)

    // google sign in
    const googleprovider = new GoogleAuthProvider();
    const signinwithGoogle = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }

    useEffect(()=> {
        const Unsubcrive = onAuthStateChanged(auth , currentUser => {
            Setuser(currentUser)
            setloading(false)
            console.log('observing current user' , currentUser)
        } )

        return () => {
            Unsubcrive()
        }

    },[auth])

    const createUser = (email , password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signinUser = (email , password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const LogOut = () => {
        setloading(true)
        return signOut(auth)
    }
    const authinfo = {user , createUser , signinUser , LogOut , loading , signinwithGoogle}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node
};

export default AuthProvider;

/**
 * 1.Create Context and export it
 * 2.set provider with value
 * 3.use the auth provider in main.jsx file
 * 4. access children in the AuthProvider Component as children and use it in the middle of the provider
 * */ 