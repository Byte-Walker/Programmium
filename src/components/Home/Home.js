import React from 'react';
import CourseGridContainer from '../CourseGridContainer/CourseGridContainer';
import Featured from '../Featured/Featured';
import MiddleBar from '../MiddleBar/MiddleBar';

const Home = () => {
    return (
        // Building home page
        <>
            <Featured />
            <MiddleBar />
            <h2 className="text-4xl text-center font-semibold mt-24 mb-20">Featured courses</h2>
            <CourseGridContainer/>
        </>
    );
};

export default Home;
