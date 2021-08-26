import ACTION_TYPES from '../const/actionTypes'
import { 
    IUserProfile,
    IProductsArray,
    IGame,
    TSetUser,
    TGetUser,
    TIsSignedIn,
    TGetProductsArray,
    TAddGameToProductsArray,
    TGetFilteredProducts,
    TGetCurrentGameCard,
    TAddItemToCart,
    TRemoveItemFromCart,
} from '../../types/types'

// Users actions________________________________________________________________________________________________

export const setUser = (payload: IUserProfile): TSetUser => {
    return {
        type: ACTION_TYPES.SET_USER,
        payload: {...payload},
    }
}

export const getUserProfile = (payload: IUserProfile): TGetUser => {
    return {
        type: ACTION_TYPES.GET_USER_PROFILE,
        payload: {...payload},
    }
}

export const isSignedIn = (payload: boolean): TIsSignedIn => ({
    type: ACTION_TYPES.IS_SIGNED_IN,
    payload: payload,
})

// Products actions________________________________________________________________________________________________

export const getProductsArray = (payload: Array<IGame>): TGetProductsArray => ({
    type: ACTION_TYPES.GET_PRODUCTS_ARRAY,
    payload: [...payload],
})

export const addGameToProductsArray = (payload: IGame): TAddGameToProductsArray => ({
    type: ACTION_TYPES.ADD_GAME_TO_PRODUCTS,
    payload: {...payload},
})

export const getFilteredProducts = (payload: Array<IGame>): TGetFilteredProducts => ({
    type: ACTION_TYPES.GET_FILTERED_PRODUCTS,
    payload: [...payload],
})

export const getCurrentGameCard = (payload: IGame): TGetCurrentGameCard => ({
    type: ACTION_TYPES.CURRENT_GAME_CARD,
    payload: payload,
})

// Cart actions________________________________________________________________________________________________

export const addItemToCart = (item: IGame): TAddItemToCart => ({
    type: ACTION_TYPES.ADD_ITEM,
    payload: item,
});

export const removeItemFromCart = (index: number): TRemoveItemFromCart => ({
    type: ACTION_TYPES.REMOVE_ITEM,
    payload: index ,
});