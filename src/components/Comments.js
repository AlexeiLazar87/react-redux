import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useCommentsFetcher, useCommentsSetError, useCommentsSetLoading} from "../redux/customHooks";

const CommentsList = () => {
    const {comments, isLoading, error} = useSelector(({comments}) => {
        return comments
    });

    const commentsFetcher = useCommentsFetcher();
    const commentsSetLoading = useCommentsSetLoading();
    const commentsSetError = useCommentsSetError();
    const fetchComments = async () => {
        try {
            commentsSetLoading();
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const payload = await response.json();
            setTimeout(() => {
                commentsFetcher(payload);
            }, 1000)
        } catch (e) {
            commentsSetError('Error')
        }
    }

    useEffect(() => {
        fetchComments();
    }, [])

    if (isLoading) {
        return <h1>Loading Comments ...</h1>
    }
    if (error) {
        return {error}
    }

    return (
        <div>
            {
                comments.map(comment => (
                    <h4 key={comment.id}>
                        Name: {comment.name} <br/>
                        Email: {comment.email}
                        <hr/>
                    </h4>
                ))
            }
        </div>
    )
}

export function Comments() {
    return (
        <div>
            <CommentsList/>
        </div>
    )
}