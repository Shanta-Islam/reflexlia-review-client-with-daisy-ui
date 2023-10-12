import React, { useContext, useEffect, useState } from 'react';
import { HiMoon, HiSun } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Header = () => {
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><a href="/">About</a></li>
        <li><Link to='/services'>Services</Link></li>
        <li><a href="/">Blog</a></li>
    </>
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Sign Out');
            })
            .catch(error => {
                const onlyErrMsg = error.message.slice(22, error.message.length - 2);
                const processErrMsg = onlyErrMsg.split('-');
                for (let i = 0; i < processErrMsg.length; i++) {
                    processErrMsg[i] = processErrMsg[i].charAt(0).toUpperCase() + processErrMsg[i].slice(1);

                }
                const finalMsg = processErrMsg.join(" ");
                toast.error(finalMsg);
            });
    }
    return (
        <div className="navbar bg-base-100 fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost normal-case text-xl">Reflexlia</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-square btn-ghost">
                    <label className="swap swap-rotate w-6 h-6">
                        <input type="checkbox"
                            onChange={handleToggle}
                            checked={theme === "light" ? false : true} />
                        <HiSun className="w-6 h-6 swap-on"></HiSun>
                        <HiMoon className="w-6 h-6 swap-off"></HiMoon>
                    </label>
                </button>
                <div className={user?.uid ? 'hidden' : 'block'}>
                    <Link to='/login' className="btn btn-ghost">Login</Link>
                    <Link to='/signup' className="btn btn-ghost">Sign Up</Link>
                </div>
                <div className={user?.uid ? 'block' : 'hidden'}>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0}>
                            <div className="avatar">
                                <div className="w-8 rounded-full ms-3">
                                    <img src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'} rounded={true} alt='img' />
                                </div>
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-48 mt-4">
                            <li><a href='/'>My Reviews</a></li>
                            <li><a href='/'>Add Services</a></li>
                            <li><a href='/'>Profile Setting</a></li>
                            <li><a href='/'>Reset Password</a></li>
                            <li><a href='/'><button className='btn' onClick={handleLogOut}>Logout</button></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;