import {useDispatch} from "react-redux";
import {setCommentsError, setCommentsIsLoading, setComments} from "./actionCreators";

export const useCommentsFetcher = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setComments(payload))
    }
};

export const useCommentsSetLoading = () => {
    const dispatch = useDispatch();
    return () => {
        dispatch(setCommentsIsLoading())
    }
};

export const useCommentsSetError = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setCommentsError(payload))
    }
};