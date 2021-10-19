import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import useAuth from '../../hooks/useAuth';
import img from '../../12 .png'
import { useState } from "react";
import initialAuthentication from "../../Firebase/Initialize-Authentication";



initialAuthentication();

const Login = () => {

    const { googleSignUp } = useAuth()
    const { gitHubSignUp } = useAuth()
    const { facebookSignUp } = useAuth()
    // const { verifyEmail } = useAuth()
    // const { normal } = useAuth()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'
    const history = useHistory()






    const [setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();


    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                history.push(redirect_url)
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                history.push(redirect_url)
                setError('');

            })
            .catch(error => {
                setError(error.message);
            })
    }



    const handleSign = () => {

        googleSignUp()
            .then(result => {
                history.push(redirect_url)
            })
    }
    const handleGithubSign = () => {
        gitHubSignUp()
            .then(result => {

                history.push(redirect_url)
            })
    }
    const handleFacebook = () => {
        facebookSignUp()
            .then(result => {

                history.push(redirect_url)
            })
    }



    return (
        <div className="login">
            <div>
                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-lg-6">

                        <form onSubmit={handleRegistration}>
                            <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                            {!isLogin && <div className="row mb-3">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                                </div>
                            </div>}
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                    <div className="form-check">
                                        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Already Registered?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3 text-danger">{error}</div>
                            <button type="submit" className="btn btn-primary">
                                {isLogin ? 'Login' : 'Register'}
                            </button>


                        </form>



                        {
                            <button className="inp mt-5" onClick={handleSign}><i className="fab fa-google"></i>Log with Google</button>
                        }
                        <br />
                        {
                            <button className="inp mt-3" onClick={handleGithubSign}><i className="fab fa-github"></i>Log with GitHub</button>
                        }
                        <br />
                        {
                            <button className="inp mt-3" onClick={handleFacebook}><i className="fab fa-facebook"></i>Log with Facebook</button>
                        }

                    </div>
                </div>


            </div>
        </div>
    );

};

export default Login;