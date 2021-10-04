import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { useState, useEffect } from 'react';

const BlogPage = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch('./blogPosts.json')
            .then((response) => response.json())
            .then((data) => setBlogPosts(data));
    }, []);
    return (
        <div>
            <div className="bg-gray-100 py-16">
                <h1 className="text-5xl font-bold text-center text-blue-600 mx-auto mb-5 bg-gray capitalize">
                    Stay updated
                </h1>
                <h2 className="text-4xl font-semibold text-gray-700 text-center capitalize">
                    With the latest news of tech world
                </h2>
            </div>
            <div className="max-width">
                <div className="grid grid-cols-3 gap-10 p-28">
                    {
                        blogPosts.map((post) => <BlogCard post={post} key={post.name}/>)
                    }
                </div>

            </div>
        </div>
    );
};

export default BlogPage;
