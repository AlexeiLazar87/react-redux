import {useSelector} from "react-redux";
import {useEffect} from "react";
import {usePostsFetcher, usePostsSetError, usePostsSetLoading} from "../redux/customHooks";

export const Posts = () => {
    const {posts, isLoading, error} = useSelector(({posts}) => {
        return posts
    });
    const postsFetcher = usePostsFetcher();
    const postsSetLoading = usePostsSetLoading();
    const postsSetError = usePostsSetError();
    const fetchPosts = async () => {
        try {
            postsSetLoading();
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const payload = await response.json()
            setTimeout(() => {
                postsFetcher(payload)
            }, 1000)
        } catch (e) {
            postsSetError('Error')
        }
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    if (isLoading) {
        return <h1>Loading Posts ...</h1>
    }
    if (error) {
        return {error}
    }

    return (
        <div>
            {
                posts.map(post => (
                    <h4 key={post.id}>
                        ID: {post.id} <br/>
                        Title: {post.title}
                        <hr/>
                    </h4>
                ))
            }
        </div>
    )

};