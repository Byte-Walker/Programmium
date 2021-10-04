import React from 'react';

const MiddleBar = () => {
    return (
        <div className="bg-blue-600">
            <div className="flex justify-between text-white p-6 max-width">
                <div className="flex items-center">
                    <i className="fas fa-laptop-code text-6xl mr-4"></i>
                    <p className="text-xl w-40 capitalize">
                        Learn coding from experts
                    </p>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-brain text-6xl mr-4"></i>
                    <p className="text-xl w-40 capitalize">
                        Harness your awesome skill
                    </p>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-user-md text-6xl mr-4"></i>
                    <p className="text-xl w-40 capitalize">
                        Achieve your dream job
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MiddleBar;
