import './App.css';
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {
    usePostsFetcher,
    usePostsSetLoading,
    usePostsSetError
} from './redux';
import {useCommentsFetcher, useCommentsSetError, useCommentsSetLoading} from "./redux/comments.hooks";

const Posts = () => {
    const {isLoading, posts, error} = useSelector(({posts}) => posts);
    const postFetcher = usePostsFetcher();
    const postLoading = usePostsSetLoading();
    const postError = usePostsSetError();

    const fetchPosts = async () => {
        try {
            postLoading()
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const payload = await response.json();
            postFetcher(payload);
        } catch (e) {
            postError('Failed to fetch data');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    if (error) {
        return (
            <h1>{error}</h1>
        )
    }
    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div>
            {
                posts.map(post => (
                    <p key={post.id}>{post.title} - {post.body}</p>
                ))
            }
        </div>
    );
};

const Comments = () => {
    const {isLoading, comments, error} = useSelector(({comments}) => comments);
    const commentFetcher = useCommentsFetcher();
    const commentLoading = useCommentsSetLoading();
    const commentError = useCommentsSetError();

    const fetchComments = async () => {
        try {
            commentLoading()
            const response = await fetch('https://jsonplaceholder.typicode.com/comments')
            const payload = await response.json();
            commentFetcher(payload);
        } catch (e) {
            commentError('Failed to fetch data');
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);
    if (error) {
        return (
            <h1>{error}</h1>
        )
    }
    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div>
            {
                comments.map(comment => (
                    <p key={comment.id}>{comment.name} - {comment.email}</p>
                ))
            }
        </div>
    );
};

function App() {
    return (
        <div className="App">
            {/*<Posts/>*/}
            <Comments/>
        </div>
    );
}

export default App;
