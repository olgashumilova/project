import { ACTION_TYPES } from '../const/actionTypes';

export const initialState = {
  products: [],
  userProfile: [],
  authUser: null,
  isSignedIn: false,
  filteredProducts: [],
  cart: [],
  totalQuantity: 0,
  currentGameCard: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

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
      case ACTION_TYPES.GET_PRODUCTS_ARRAY: {
        return {
          ...state,
          products: action.payload,
        }
      }
      case ACTION_TYPES.GET_FILTERED_PRODUCTS: {
        return {
          ...state,
          filteredProducts: action.payload,
        }
      }
      case ACTION_TYPES.CURRENT_GAME_CARD: {
        return {
          ...state,
          currentGameCard: action.payload,
        }
      }
      case ACTION_TYPES.DELETE_CURRENT_GAME_CARD: {
        return {
          ...state,
          currentGameCard: null,
        }
      }
      case ACTION_TYPES.ADD_ITEM: {
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
      default: return state
    }
}

export default reducer