import {
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING,
    RESET_PRODUCTS_LOADING,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST, ADD_TO_CART, REMOVE_FROM_CART
} from '../actionTypes';

// sortOptions - is an argument for redux-thunk middleware
export const fetchProducts = (sortOptions) => async (dispatch) => {
    try {
        dispatch(setProductsLoading());
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json();
        // data.sort((a,b) => {     // example of sort with redux-thunk
        //     if (sortOptions.order === 'ASC') {
        //         return a[sortOptions.field] - b[sortOptions.field]
        //     }
        //     return b[sortOptions.field] - a[sortOptions.field]
        // })
        dispatch(setProducts(data))
    } catch (e) {
        console.log(e, 'error');
    } finally {
        dispatch(resetProductsLoading());
    }
}

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
export const setProductsLoading = () => ({type: SET_PRODUCTS_LOADING});
export const resetProductsLoading = () => ({type: RESET_PRODUCTS_LOADING});
export const addToWishList = (payload) => ({type: ADD_TO_WISHLIST, payload});
export const removeFromWishList = (payload) => ({type: REMOVE_FROM_WISHLIST, payload});
export const addToCart = () => ({type: ADD_TO_CART});
export const removeFromCart = () => ({type: REMOVE_FROM_CART});



