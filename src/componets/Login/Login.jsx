import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {

    const { SingInUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        //SingIn user By AuthProvider 
        SingInUser(email, password)
            .then(result => {
                console.log(result);
                navigate("/");

                //It does not work here
                // <Navigate to="/"></Navigate>
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className="h-[90vh] flex justify-center items-center ">
            <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form
                        onSubmit={handleLogin}
                        className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            required
                            name='email'
                            className="input"
                            placeholder="Email" />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            required
                            className="input"
                            placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 mb-1">Login</button>
                        <p>New to this site? please <Link className='text-blue-500 underline' to="/register">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;