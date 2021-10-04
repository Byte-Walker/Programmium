import React from 'react';
import IllustrationTeam from '../../resources/teamWork.svg';

const AboutPage = () => {
    return (
        <div className="max-width">
            <div className="grid grid-cols-2 gap-4 place-items-center my-24">
                {/* Left side content */}
                <div>
                    <h1 className="text-5xl font-bold text-blue-600 my-6">
                        About Us
                    </h1>
                    <p className="text-gray-600 w-3/4 leading-relaxed mb-8">
                        We believe in innovation and contribution to the
                        programming community. That's why gathered all the world
                        class leaders in the tech field and started making
                        tutorial to build the strongest programming community.
                        We want every member of our community to shine and lead
                        the tech world. That's what make our courses and
                        guidelines tremendously efficient for the people.
                    </p>
                    <h5 className="font-semibold text-gray-500 mb-3">
                        Don't forget to subscribe to our newsletter
                    </h5>

                    {/* Email submission form */}
                    <form className="p-2 rounded bg-white inline-block border border-blue-300">
                        <input
                            className="h-10 px-4 mr-3 w-96 bg-white outline-none rounded"
                            type="email"
                            name="search-box"
                            placeholder="Your Email"
                        />
                        <button className="py-3 px-5 bg-blue-200 text-blue-700 border border-blue-300 font-medium rounded hover:bg-blue-600 hover:text-white transition-all duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Right side image */}
                <img src={IllustrationTeam} alt="Team work" />
            </div>
        </div>
    );
};

export default AboutPage;
