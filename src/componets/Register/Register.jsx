// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
// import { auth } from '../../firebase.init';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const [showError, setShowError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault(); //To prevent Reload
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setShowError('');
        setSuccess(false)

        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
            console.log(password)
            setShowError("Password Must be more than 8 characters, including. At least one number. At least one lowercase letter. At least one uppercase letter")
            return;
        }
        console.log(name, email, password);

        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         console.log(result.user);
        //         setSuccess(true)
        //     })
        //     .catch(error => {
        //         console.log(error.message)
        //         if(error.message === "Firebase: Error (auth/email-already-in-use)."){
        //             setShowError("Email already Added. Please LogIn")
        //         }
        //         else{
        //             setShowError(error.message)
        //         }
        //     })


        //Register User in the AuthProvider ---------------------
        createUser(email, password)
            .then(result => {
                console.log(result)
                setSuccess(true);
                navigate("/");
            })
            .catch(error => {
                console.log(error.message);
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    setShowError("Email already Added. Please LogIn")
                }
                else {
                    setShowError(error.message)
                }
            })

    }

    return (
        <div className="h-[90vh] flex justify-center items-center ">
            <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <form
                        onSubmit={handleRegister}
                        className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name='name'
                            className="input"
                            required
                            placeholder="Email" />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="input"
                            placeholder="example@email.com" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input"
                            placeholder="Password" />
                        {
                            showError && <p className="text-red-500">{showError}</p>
                        }
                        {
                            success && <p className="text-green-500">User Successfully Register</p>
                        }
                        <button className="btn btn-neutral mt-4 mb-1">Register</button>
                        <p>Already have an account? please <Link className='text-blue-500 underline' to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;