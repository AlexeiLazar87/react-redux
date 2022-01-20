
const initialState = {
    users: [],
    isLoading: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS': {
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        }
        case 'SET_USERS_IS_LOADING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'SET_USERS_ERROR': {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        default: return state
    }
}