import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscrive = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            console.log("observer", currentUser)
            setLoading(false)
            if (currentUser) {

                axios.post('http://localhost:5000/jwt', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('token', res.data)
                    })
            }
            else {
                axios.post("http://localhost:5000/logout", loggedUser,
                    {
                        withCredentials: true
                    })
                    .then(res => console.log(res.data))
            }
        })
        return () => {
            unSubscrive()
        }
    }, [])
    const logOut = () => {
        return signOut(auth, currentUser => {
            setUser(currentUser)
        })
    }
    const googleUser = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const info = {
        user,
        loading,
        createUser,
        logOut,
        googleUser,
        singInUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;