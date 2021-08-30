import React, { useState, useEffect } from 'react'

export default function Blogs(props) {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setBlogs(props.blogs);
    }, [props.blogs]);

    return (
        <div style={{ marginLeft: '20px' }}>
            <p>This is blogs section</p>
            {blogs.map((blog, i) => {
                return <li>Blog Id = {blog.id}, Title: {blog.title}, Description: {blog.description}</li>
            }
            )}
        </div>
    );
}
