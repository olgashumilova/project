import { ACTION_TYPES } from '../const/actionTypes';

export const initialState = {
  users: [],
  products: [],
  authUser: null,
}
console.log(initialState.authUser);

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