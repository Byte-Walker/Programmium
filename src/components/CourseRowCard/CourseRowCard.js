import React from 'react';

const CourseRowCard = (props) => {
    const { category, title, lessons, duration, level, price, img, author } =
        props.course;
    return (
        <div className="grid grid-cols-3 gap-6 py-6">
            <img src={img} alt={title} className="w-full rounded-lg" />
            <div className="col-span-2 flex flex-col justify-center">
                <p className="text-blue-500">{category}</p>
                <div className="flex justify-between">
                    <h2 className="font-medium my-2 text-lg">
                        {title}
                    </h2>
                    <p className="text-2xl font-semibold">${price}</p>
                </div>

                <div className="flex">
                    <small className="font-semibold text-sm text-gray-400 mr-6">
                        <i class="far fa-play-circle mr-1.5"></i>
                        <span>{lessons} Lessons</span>
                    </small>
                    <small className="font-semibold text-sm text-gray-400 mr-6">
                        <i class="far fa-clock mr-1.5"></i>
                        <span>{duration} hours</span>
                    </small>
                    <small className="font-semibold text-sm text-gray-400 mr-6">
                        <i class="fas fa-sliders-h mr-1.5"></i>
                        <span>
                            {level === 0
                                ? 'All Level'
                                : level === 1
                                ? 'Beginner'
                                : level === 2
                                ? 'Intermediate'
                                : 'No level'}
                        </span>
                    </small>
                </div>
                <small className="font-semibold text-sm text-gray-500 my-4">
                    <span className="text-blue-500">{author}</span>
                </small>
                <button className="py-2.5 px-5 my-2 w-40 bg-blue-600 text-white font-semibold rounded hover:bg-yellow-300 hover:text-blue-900 transition-all duration-200">
                    Enroll now
                </button>
            </div>
        </div>
    );
};

export default CourseRowCard;
