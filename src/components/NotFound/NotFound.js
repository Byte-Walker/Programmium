import React from 'react';
import { Link } from 'react-router-dom';
import illustration404 from '../../resources/404.svg';

const NotFound = () => {
    return (
        <div className="max-width py-20">
            <img
                src={illustration404}
                alt="Not Found"
                className="w-2/4 mx-auto"
            />
            <h1 className="text-4xl font-bold text-center my-20">
                OOPS! We couldn't find the page you requested.
            </h1>
            <div className="text-center">
                <Link
                    to="/"
                    className="text-xl text-center inline-block bg-blue-100 py-2 px-3 text-blue-600 hover:text-white hover:bg-blue-600 rounded transition-all duration-200"
                >
                    <i class="fas fa-arrow-left text-bold mr-2"></i> Go back to
                    Home page
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
