import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({ childern }) => {
    const [user, setUser] = useState(null)
    const [isLoader, setIsLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setIsLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singInUser = (email, password) => {
        setIsLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscrive = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("observer", currentUser)
            setIsLoader(false)
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
        isLoader,
        createUser,
        singInUser,
        logOut,
        googleUser
    }
    return (
        <AuthContext.Provider value={info}>
            {childern}
        </AuthContext.Provider>
    );
};

export default AuthProvider;