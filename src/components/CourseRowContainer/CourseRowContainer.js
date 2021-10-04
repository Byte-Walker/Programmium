import React from 'react';
import CourseRowCard from '../CourseRowCard/CourseRowCard';
import useCourses from '../hooks/useCourses';

const CourseRowContainer = () => {
    const [courses] = useCourses();
    return (
        <div className="bg-white py-20">
            <div className="max-width grid grid-cols-1 divide-y divide-gray-200">
                {courses.map((course) => (
                    <CourseRowCard course={course} />
                ))}
            </div>
        </div>
    );
};

export default CourseRowContainer;
