import ACTION_TYPES from '../const/actionTypes'
import { IUserProfile, IGame } from '../../types/types'

// Users actions________________________________________________________________________________________________

export const setUser = (payload: IUserProfile): {type: string, payload: IUserProfile} => ({
    type: ACTION_TYPES.SET_USER,
    payload: {...payload},
})

export const getUserProfile = (payload: IUserProfile): {type: string, payload: IUserProfile} => ({
    type: ACTION_TYPES.GET_USER_PROFILE,
    payload: {...payload},
})

export const isSignedIn = (payload: boolean): {type: string, payload: boolean} => ({
    type: ACTION_TYPES.IS_SIGNED_IN,
    payload: payload,
})

// Products actions________________________________________________________________________________________________

export const getProductsArray = (payload: any): {type: string, payload: any} => ({
    type: ACTION_TYPES.GET_PRODUCTS_ARRAY,
    payload: [...payload],
})

export const addGameToProductsArray = (payload: IGame): {type: string, payload: IGame} => ({
    type: ACTION_TYPES.ADD_GAME_TO_PRODUCTS,
    payload: {...payload},
})

export const getFilteredProducts = (payload: any): {type: string, payload: any} => ({
    type: ACTION_TYPES.GET_FILTERED_PRODUCTS,
    payload: [...payload],
})

export const getCurrentGameCard = (payload: IGame): {type: string, payload: IGame} => ({
    type: ACTION_TYPES.CURRENT_GAME_CARD,
    payload: {...payload},
})

// Cart actions________________________________________________________________________________________________

export const addItemToCart = (item: IGame): {type: string, payload: IGame} => ({
    type: ACTION_TYPES.ADD_ITEM,
    payload: item,
});

export const removeItemFromCart = (index: number): {type: string, payload: number} => ({
    type: ACTION_TYPES.REMOVE_ITEM,
    payload: index ,
});