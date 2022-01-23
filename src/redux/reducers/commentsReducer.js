
const initialState = {
    comments: [],
    isLoading: false,
    error: null
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMMENTS': {
            return {
                ...state,
                comments: action.payload,
                isLoading: false
            }
        }
        case 'SET_COMMENTS_IS_LOADING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'SET_COMMENTS_ERROR': {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        default: return state
    }
}