import {useDispatch} from "react-redux";
import {setPosts, setPostsError, setPostsIsLoading} from "../actionCreators/postsActionCreators";

export const usePostsFetcher = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setPosts(payload))
    }
};

export const usePostsSetLoading = () => {
    const dispatch = useDispatch();
    return () => {
        dispatch(setPostsIsLoading())
    }
};

export const usePostsSetError = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setPostsError(payload))
    }
}