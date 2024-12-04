import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { authContext } from './Provider/AuthProvider';

const SignIn = () => {
    const { signInUser } = useContext(authContext)
    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result.user)

                const lastSignInTime = result.user?.metadata.lastSignInTime;
                const loginInfo = { email, lastSignInTime }

                fetch('http://localhost:5000/users/', {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })


    }
    return (
        <div className='bg-red-50 min-h-screen'>
            <Navbar></Navbar>
            <h1 className='text-center font-bold text-2xl my-10'>Please Log In</h1>
            <div className='flex justify-center mt-5'>
                <div className="card bg-red-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-900 text-white">Sign In</button>
                            <br />
                            <p className='text-center'> Don't have an account? <Link className='font-bold text-blue-950' to='/signUp'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;