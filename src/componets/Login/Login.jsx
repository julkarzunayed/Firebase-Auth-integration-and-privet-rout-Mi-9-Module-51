import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="h-[90vh] flex justify-center items-center ">
            <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 mb-1">Login</button>
                        <p>New to this site? please <Link className='text-blue-500 underline' to="/register">Register</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;