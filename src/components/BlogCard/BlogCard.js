import React from 'react';

const BlogCard = ({post}) => {
    const { title, date, source, summary, thumbnail, link } = post;
    
    return (
        <div className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <img src={thumbnail} alt={title} className="h-48 w-full rounded-t-lg"/>
            <div className="py-4 px-7">
                <small className="text-sm text-gray-500 block mb-2">
                    <i className="far fa-calendar mr-2"></i>
                    {date}
                </small>
                <a className="font-semibold block text-gray-800 mb-3 hover:text-blue-600"  href={link} rel="noreferrer" target="_blank">{title}</a>
                <p class="mb-5 text-gray-600">{summary.slice(0, 50) + '...'}</p>
                <a className="bg-blue-100 text-blue-600 inline-block px-3 py-2 mb-4 rounded hover:bg-white hover:shadow-xl hover:border-blue-300 border border-blue-100 transition-all duration-300" href={link} rel="noreferrer" target="_blank">
                    Read more <i className="fas fa-long-arrow-alt-right"></i>
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
