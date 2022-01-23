import {usersReducer} from "./usersReducer";
import {postsReducer} from "./postsReducer";
import {combineReducers} from "redux";

export * from './usersReducer';
export * from './postsReducer';


export const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer
})