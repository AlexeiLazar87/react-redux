import {
    SET_POSTS,
    SET_POSTS_IS_LOADING,
    RESET_POSTS_IS_LOADING,
    SET_POSTS_ERROR
} from '../actionTypes';

const initialState = {
    posts: [],
    isLoading: false
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
                error: null
            }
        }
        case SET_POSTS_IS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case RESET_POSTS_IS_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        case SET_POSTS_ERROR: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        default:
            return  state
    }
}