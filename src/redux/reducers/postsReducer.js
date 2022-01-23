
const initialState = {
    posts: [],
    isLoading: false,
    error: null
};

export const postsReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'SET_POSTS': {
            return {
                ...state,
                posts: action.payload,
                isLoading: false,

            }
        }
        case 'SET_POSTS_IS_LOADING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'SET_POSTS_ERROR': {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        default: return state
    }
}