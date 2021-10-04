import React from 'react';
import CourseRowContainer from '../CourseRowContainer/CourseRowContainer';

const CoursesPage = () => {
    return (
        <div className="bg-gray-200">
            {/* Top heading of the page */}
            <div>
                <h1 className="text-5xl text-center font-medium p-20">
                    Courses
                </h1>

                <CourseRowContainer />
            </div>
        </div>
    );
};

export default CoursesPage;
