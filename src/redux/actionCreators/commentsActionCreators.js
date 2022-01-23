import {SET_COMMENTS, SET_COMMENTS_IS_LOADING, SET_COMMENTS_ERROR} from "../actionTypes";

export const setComments = (payload) => ({type: SET_COMMENTS, payload});
export const setCommentsIsLoading = () => ({type: SET_COMMENTS_IS_LOADING});
export const setCommentsError = (payload) => ({type: SET_COMMENTS_ERROR, payload});