import React, { useState, useEffect } from 'react'

export default function Comments(props) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        setComments(props.comments);
    }, [props.comments]);

    return (
        <div style={{ marginLeft: '20px' }}>
            <p>This is comments section</p>
            {comments.map((comment, i) => {
                if (comment.isActive)
                    return <li>Comment Id = {comment.id}, Blog Id = {comment.blogId}, Comment: {comment.comment}, Comment is active</li>
            }
            )}
        </div>
    );
}
