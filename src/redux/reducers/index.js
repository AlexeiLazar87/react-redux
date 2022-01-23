import {usersReducer} from "./usersReducer";
import {postsReducer} from "./postsReducer";
import {combineReducers} from "redux";
import {commentsReducer} from "./commentsReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
})