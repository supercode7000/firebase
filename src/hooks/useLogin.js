import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase/config'
import { useState } from 'react';
import { useAuthContext } from "./useAuthContext";
import { doc, updateDoc } from "firebase/firestore";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()
    const login = (email, password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Loggged in 
                // console.log(userCredential)
                // console.log('-------')
                const user = userCredential.user;
                updateDoc(doc(db, "users", user.uid), {
                    online: true
                }).then(() => {
                    console.log('user is Logout')
                    dispatch({ type: 'LOGIN', payload: user })
                }).catch((error) => {
                    console.log(error);
                })
                // console.log('user is sign in', user)

            })
            .catch((error) => {
                setError(error.message)
            });
    }
    return { error, login }
}