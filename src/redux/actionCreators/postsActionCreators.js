import {SET_POSTS, SET_POSTS_IS_LOADING, SET_POSTS_ERROR} from "../actionTypes";

export const setPosts = (payload) => ({type: SET_POSTS, payload});
export const setPostsIsLoading = () => ({type: SET_POSTS_IS_LOADING})
export const setPostsError = (payload) => ({type: SET_POSTS_ERROR, payload});