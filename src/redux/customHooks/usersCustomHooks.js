import {useDispatch} from "react-redux";
import {setUsers, setUsersError, setUsersIsLoading} from "../actionCreators";

export const useUsersFetcher = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setUsers(payload))
    }
}

export const useUsersSetLoading = () => {
    const dispatch = useDispatch();
    return () => {
        dispatch(setUsersIsLoading())
    }
}

export const useUsersSetError = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setUsersError(payload))
    }
}