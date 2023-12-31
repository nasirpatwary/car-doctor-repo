import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(); 
 const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
     
    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log('current user all details',currentUser);
            setLoading(false)
        })
        return () =>{
        return unSubcribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;