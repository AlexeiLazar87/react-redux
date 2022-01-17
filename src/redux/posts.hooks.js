import {useDispatch} from "react-redux";
import {setPostsError, setPostsIsLoading, setPosts} from "./actionCreators";

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
};