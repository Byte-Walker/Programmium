import React from 'react';
import CourseRowCard from '../CourseRowCard/CourseRowCard';
import useCourses from '../hooks/useCourses';

const CourseRowContainer = () => {
    // Fetching course data using custom hook useCourses()
    const [courses] = useCourses();

    return (
        <div className="bg-white py-20">
            <div className="max-width grid grid-cols-1 divide-y divide-gray-200 border px-6 rounded-lg">
                {courses.map((course, index) => (
                    <CourseRowCard course={course} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default CourseRowContainer;
