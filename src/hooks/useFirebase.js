import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import initialAuthentication from "../Firebase/Initialize-Authentication";

initialAuthentication()


const useFirebase = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [user, setUser] = useState({})
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('')


    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider()

    const auth = getAuth()


    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubSignUp = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    const facebookSignUp = () => {
        return signInWithPopup(auth, facebookProvider)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [auth])

    return {
        // error,
        handleSubmit,
        errors,
        register,
        user,
        googleSignUp,
        gitHubSignUp,
        facebookSignUp,
        logOut

    }

}
export default useFirebase;