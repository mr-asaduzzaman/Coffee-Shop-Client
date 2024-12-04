import React from 'react';
import {Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-orange-800 flex justify-between">
                <div className="flex-1">
                    <Link to='/'><a className="btn btn-ghost font-bold text-2xl text-white">CoFFee Express</a></Link>
                </div>
                <div className='mr-5 flex gap-5'>
                    <NavLink to='/'><button className='btn btn-sm'>Home</button></NavLink>
                    <NavLink to='/coffees'><button className='btn btn-sm'>Coffees</button></NavLink>
                    <NavLink to='/addCoffee'><button className='btn btn-sm'>Add Coffee</button></NavLink>
                    <NavLink to='/signIn'><button className='btn btn-sm'>Sign In</button></NavLink>
                    <NavLink to='/users'><button className='btn btn-sm'>Users</button></NavLink>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-sm w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;