import './Login.css'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


// import img from '../../12 .png'

const Login = () => {
    // const { register, handleSubmit, errors, user } = useAuth()
    const { googleSignUp } = useAuth()
    const { gitHubSignUp } = useAuth()
    const { facebookSignUp } = useAuth()
    // const { verifyEmail } = useAuth()
    // const { normal } = useAuth()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'
    const history = useHistory()

    // const onSubmit = (user) => {

    // };

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
                        {/* <img className="img-fluid" src={img} alt="" /> */}
                    </div>
                    <div className="col-lg-6">
                        <h1 className="fs-1 mt-5 text-center">Before Shopping Please</h1>
                        {/* <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="inp mt-5" placeholder="ENTER YOUR NAME" defaultValue="" {...register("displayName")} />
                            <br />
                            <input className="inp mt-2" placeholder="ENTER YOUR EMAIL" {...register("exampleRequired", { required: true })} />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <input className="log_input mt-3" type="submit" value="Log in" />
                        </form> */}
                        {/* {<p>New user <Link to="/register">Create New Account</Link></p>} */}
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