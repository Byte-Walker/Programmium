import { useEffect, useState } from 'react';

// Custom hook to fetch course data using fetch api
const useCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    return [courses, setCourses];
};

export default useCourses;
