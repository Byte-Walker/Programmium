import CourseGridCard from '../CourseGridCard/CourseGridCard';
import useCourses from '../hooks/useCourses';

const CourseGridContainer = () => {
    // Fetching course data using custom hook useCourses()
    const [courses] = useCourses();

    return (
        <div className="grid grid-cols-4 gap-5 max-width pb-28">
            {courses.map((course, index) => {
                if (index < 4) {
                    return <CourseGridCard course={course} key={index} />;
                }
            })}
        </div>
    );
};

export default CourseGridContainer;
