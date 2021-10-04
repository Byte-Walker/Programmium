import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { useState, useEffect } from 'react';

const BlogPage = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    // Fetch blog posts from using api
    useEffect(() => {
        fetch('./blogPosts.json')
            .then((response) => response.json())
            .then((data) => setBlogPosts(data));
    }, []);

    return (
        <div>
            {/* Page heading (Top heading) */}
            <div className="bg-gray-100 py-16">
                <h1 className="text-5xl font-bold text-center text-blue-600 mx-auto mb-5 bg-gray capitalize">
                    Stay updated
                </h1>
                <h2 className="text-4xl font-semibold text-gray-700 text-center capitalize">
                    With the latest news of tech world
                </h2>
            </div>

            {/* Card grid */}
            <div className="max-width">
                <div className="grid grid-cols-3 gap-10 p-28">
                    {blogPosts.map((post,index) => (
                        <BlogCard post={post} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
