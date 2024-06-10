import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
    </>

    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar relative z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="w-8 h-8" src="https://i.ibb.co/vwWfd9b/icons8-sun.gif" alt="" />
                    <a className="text-3xl font-bold text-white pl-2">party<span className="text-yellow-400">maker</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white text-base font-medium">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login"><button className="btn btn-success text-white">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;