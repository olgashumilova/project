import { ACTION_TYPES } from '../const/actionTypes';

export const initialState = {
  users: [],
  userProfile: [],
  filteredProducts: [],
  authUser: null,
  isSignedIn: false,
  cart: [],
  totalQuantity: 0,
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
    
      case ACTION_TYPES.GET_USERS: {
        return {
          ...state,
          users: [...state.users, action.payload],
        }
      }
      case ACTION_TYPES.SET_USER: {
        return {
          ...state,
          authUser: action.payload,
        }     
      }
      case ACTION_TYPES.GET_USER_PROFILE: {
        return {
          ...state,
          userProfile: action.payload,
        }
      }
      case ACTION_TYPES.IS_SIGNED_IN: {
        return {
          ...state,
          isSignedIn: action.payload,
        }     
      }
      case ACTION_TYPES.DELETE_USER: {
          return {
            ...state,
            authUser: null,
            isSignedIn: false,
          }
      }
      case ACTION_TYPES.GET_FILTERED_PRODUCTS: {
        return {
          ...state,
          filteredProducts: action.payload,
        }
      }
      case ACTION_TYPES.ADD_ITEM: {
        return {
          ...state,
          cart: [...state.cart, action.payload],
          totalQuantity: state.totalQuantity + 1,
        }
      }
      case ACTION_TYPES.DECREASE_ITEM: {
        return {
          ...state,
          cart: [...state.cart, action.payload],
          totalQuantity: state.totalQuantity - 1,
        }
      }
      case ACTION_TYPES.INCREASE_ITEM: {
        return {
          ...state,
          cart: [...state.cart, action.payload],
          totalQuantity: state.totalQuantity + 1,
        }
      }
      case ACTION_TYPES.REMOVE_ITEM: {
        return {
          ...state,
          cart: state.cart.filter((item, index) => index !== action.payload),
          totalQuantity: state.totalQuantity - 1,
        }
      }
      case ACTION_TYPES.CLEAR_CART: {
        return { 
          ...state, 
          cart: [],
          totalQuantity: 0
        }
      }
      default: return state
    }
}

export default reducer