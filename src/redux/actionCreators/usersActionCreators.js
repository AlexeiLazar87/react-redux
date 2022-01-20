import {SET_USERS, SET_USERS_ERROR, SET_USERS_IS_LOADING} from "../actionTypes";

export const setUsers = (payload) => ({type: SET_USERS, payload});
export const setUsersIsLoading = () => ({type: SET_USERS_IS_LOADING});
export const setUsersError = (payload) => ({type: SET_USERS_ERROR, payload});