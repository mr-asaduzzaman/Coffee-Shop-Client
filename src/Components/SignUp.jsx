import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { authContext } from './Provider/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(authContext)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const createdDate = result.user.metadata.creationTime
                const newUser = { name, email, createdDate }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
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
            <div className='flex justify-center mt-5'>
                <div className="card bg-red-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Your name" name='name' className="input input-bordered" required />
                        </div>
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
                            <button className="btn bg-red-900 text-white">Sign Up</button>
                            <br />
                            <p className='text-center'> Already have an account? <Link className='font-bold text-blue-950' to='/signIn'>Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;