import ACTION_TYPES from '../const/actionTypes'
import { IState, TActions } from '../../types/types'
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

export const initialState: IState = {
  products: [],
  userProfile: [],
  authUser: null,
  isSignedIn: false,
  filteredProducts: [],
  cart: [],
  totalQuantity: 0,
  currentGameCard: null,
}

type TAction = {
  type: string,
  payload: any
}

const reducer = (state = initialState, action: TAction): IState => {
  
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
      case ACTION_TYPES.ADD_GAME_TO_PRODUCTS: {
        return {
          ...state,
          products: state.products.concat(action.payload)
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