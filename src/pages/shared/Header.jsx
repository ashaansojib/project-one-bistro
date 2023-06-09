import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navBar = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ourmenu">Our Menu</Link></li>
    </>
    return (
        <div className="navbar fixed z-10 text-white max-w-screen-lg bg-black bg-opacity-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navBar}
                    </ul>
                </div>
                <Link className='text-3xl font-bold' to="/">Bistro Client</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navBar}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;