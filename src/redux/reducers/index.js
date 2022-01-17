import {postsReducer} from './postsReducer';
import {commentsReducer} from './commentsReducer';
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
})