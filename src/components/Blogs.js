import React, { useState, useEffect } from 'react'

export default function Blogs(props) {
    const [blogs, setBlogs] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        setBlogs(props.blogs);
        setComments(props.comments);
    }, [props.blogs, props.comments]);

    return (
        <div style={{ marginLeft: '20px' }}>
            <p>This is blogs section</p>
            {blogs.map((blog, blogIndex) => {
                return (
                    <ul key={blogIndex + 1}>Blog Id = {blog.id}, Title: {blog.title}, Description: {blog.description}
                        {comments.map((comment, commentIndex) => {
                            if (comment.blogId === blog.id && comment.isActive)
                                return <li key={commentIndex + 1}>Comment Id = {comment.id}, Blog Id = {comment.blogId}, Comment: {comment.comment}, Comment is active</li>
                        })}
                    </ul>
                )
            }
            )}
        </div>
    );
}
