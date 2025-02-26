import React from "react";
import axios from "axios";

const CommentList = ({ comments }) => {

    const renderComments = comments.map((comment) => {
        return (
            <>
                {
                    comment.status === 'approved' ?
                        <li key={comment.id}>{comment.content}</li>
                        : comment.status === 'pending' ?
                            <li>This comment is awaiting moderation</li>
                            : comment.status === 'rejected' ?
                                <li>This comment has been rejected</li>
                                : <></>
                }
            </>
        )
    })

    return (
        <ul>
            {renderComments}
        </ul>
    )
}

export default CommentList;