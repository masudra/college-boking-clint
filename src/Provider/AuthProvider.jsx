import { createContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { app } from "../Pages/firebase/firebase.config";

const auth = getAuth(app)

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googlePovider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    // User Create
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Update User
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }
    //  Google login 
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googlePovider)
    }

    //  Github Login
    const githubLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // log Out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        creatUser,
        login,
        updateUser,
        googleLogIn,
        githubLogIn,
        logOut,
        auth

    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;