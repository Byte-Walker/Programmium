import React from 'react';
import logo from '../../resources/programmium-logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        // Header container
        <div className="p-4 shadow-lg">
            <div className="flex items-center justify-between max-width">
                {/* Logo */}
                <NavLink to="/">
                    <img className="h-10" src={logo} alt="Programmium logo" />
                </NavLink>

                {/* Separator */}
                <div className="bg-gray-300 h-10 w-px"></div>

                {/* Middle section */}
                <div className="flex align-center">
                    {/* Search bar */}
                    <div className="p-2 rounded bg-gray-100 border border-blue-100">
                        <input
                            className="h-10 px-4 mr-3 bg-gray-100 outline-none"
                            type="text"
                            name="search-box"
                            placeholder="Search..."
                        />
                        <button className="h-10 px-4 text-blue-600 hover:bg-blue-600 hover:text-white rounded transition-all duration-300">
                            <i className="fas fa-search text-lg"></i>
                        </button>
                    </div>

                    {/* Nav menu */}
                    <ul className="flex align-center">
                        <li className="ml-6 my-auto font-medium hover:text-blue-600">
                            <NavLink
                                className="py-1"
                                to="/courses"
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: '#2563EB',
                                    borderBottom: '2px solid #2563EB',
                                }}
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li className="ml-6 my-auto font-medium hover:text-blue-600">
                            <NavLink
                                className="py-1"
                                to="/blog"
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: '#2563EB',
                                    borderBottom: '2px solid #2563EB',
                                }}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="ml-6 my-auto font-medium hover:text-blue-600">
                            <NavLink
                                className="py-1"
                                to="/about"
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: '#2563EB',
                                    borderBottom: '2px solid #2563EB',
                                }}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Separator */}
                <div className="bg-gray-300 h-10 w-px"></div>

                {/* Right section buttons */}
                <div>
                    <button className="py-3 px-5 font-medium hover:text-blue-600 hover:underline">
                        Log In
                    </button>
                    <button className="py-3 px-5 bg-blue-100 text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white transition-all duration-300">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
