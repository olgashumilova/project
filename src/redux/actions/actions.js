import { ACTION_TYPES } from '@/redux/const/actionTypes.ts';

// Users actions
export const getUsersArray = (users) => ({
    type: ACTION_TYPES.GET_USERS,
    payload: users,
})

export const setUser = (payload) => ({
    type: ACTION_TYPES.SET_USER,
    payload: {...payload},
})

export const getUserProfile = (payload) => ({
    type: ACTION_TYPES.GET_USER_PROFILE,
    payload: {...payload},
})

export const isSignedIn = (payload) => ({
    type: ACTION_TYPES.IS_SIGNED_IN,
    payload: payload,
})

// Products actions
export const getProductsArray = (payload) => ({
    type: ACTION_TYPES.GET_PRODUCTS_ARRAY,
    payload: payload,
})

export const getFilteredProducts = (payload) => ({
    type: ACTION_TYPES.GET_FILTERED_PRODUCTS,
    payload: [...payload],
})

export const getCurrentGameCard = (payload) => ({
    type: ACTION_TYPES.CURRENT_GAME_CARD,
    payload: {...payload},
})

export const deleteCurrentGameCard = (payload) => ({
    type: ACTION_TYPES.DELETE_CURRENT_GAME_CARD,
    payload: {...payload},
})

// Cart actions
export const addItemToCart = (item) => ({
    type: ACTION_TYPES.ADD_ITEM,
    payload: item,
});

export const removeItemFromCart = (index) => ({
    type: ACTION_TYPES.REMOVE_ITEM,
    payload: index ,
});