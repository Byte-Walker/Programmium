import React from 'react';

const CourseGridCard = (props) => {
    const { title, level, author, price, img } =
        props.course;
    return (
        <div className="border border-blue-100 rounded p-4 hover:shadow-xl transition-all duration-300">
            {/* Card thumbnail */}
            <img src={img} alt={title} className="mb-2" />

            {/* Difficulty level tag(Custom element) */}
            <LevelTag level={level} />

            {/* Title */}
            <a
                className="font-semibold my-1 text-lg block hover:text-blue-600"
                href={`https://www.udemy.com/courses/development/web-development/?search-query=${title
                    .split(' ')
                    .join('+')}`}
                rel="noreferrer"
                target="_blank"
            >
                {title}
            </a>
            <small className="text-blue-500">{author}</small>
            <h3 className="text-lg my-2 font-medium">
                $<span>{price}</span>
            </h3>
        </div>
    );
};

// Rendering conditional element for different difficulty levels
const LevelTag = ({ level }) => {
    let levelElement;

    if (level === 0) {
        levelElement = (
            <small className="bg-green-200 text-green-600 py-0.5 px-3 inline-block rounded font-medium my-2">
                All Levels
            </small>
        );
    } else if (level === 1) {
        levelElement = (
            <small className="bg-purple-200 text-purple-600 py-0.5 px-3 inline-block rounded font-medium my-2">
                Beginner
            </small>
        );
    } else if (level === 2) {
        levelElement = (
            <small className="bg-red-200 text-red-600 py-0.5 px-3 inline-block rounded font-medium my-2">
                Intermediate
            </small>
        );
    }

    return levelElement;
};

export default CourseGridCard;
