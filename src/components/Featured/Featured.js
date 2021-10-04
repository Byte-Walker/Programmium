import React from 'react';
import featuredImg from '../../resources/featured-img.svg';

const Featured = () => {
    return (
        <div className="bg-gray-50 py-20 ">
            <div className="grid grid-cols-2 gap-2 place-items-center max-width">
                <div className="w-4/5">
                    <p className="text-blue-600 uppercase font-medium tracking-wide">
                        Start to code right away
                    </p>
                    <h1 className="text-4xl my-4 font-medium tracking-normal leading-normal capitalize">
                        Access to <span className="text-blue-600">500+</span>{' '}
                        awesome tutorials from greatest programming minds.
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Take your programming level to the next level.
                    </p>
                    <div className="p-2 rounded bg-white inline-block shadow-lg hover:shadow-xl transition-all duration-200">
                        <input
                            className="h-11 w-96 px-4 mr-3 bg-white"
                            type="text"
                            name="search-box"
                            placeholder="What do you want to learn?"
                        />
                        <button className="h-11 px-4 text-blue-600 hover:bg-blue-600 hover:text-white rounded transition-all duration-300">
                            <i className="fas fa-search text-lg"></i>
                        </button>
                    </div>
                </div>
                <img src={featuredImg} alt="Programmium featured" />
            </div>
        </div>
    );
};

export default Featured;
