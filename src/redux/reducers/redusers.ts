import { ACTION_TYPES } from '../const/actionTypes';

export const initialState = {
  users: [],
  userProfile: [],
  products: [],
  authUser: null,
  isSignedIn: false,
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
      case ACTION_TYPES.GET_PRODUCTS: {
        return {
          ...state,
          products: action.payload,
        }
      }
      default: return state
    }
}

export default reducer