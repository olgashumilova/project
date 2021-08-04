import { ACTION_TYPES } from '../const/actionTypes';

export const initialState = {
  users: [],
  isSignedIn: false,
  authUser: null,
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
            isSignedIn: true,
          }
        }
        case ACTION_TYPES.DELETE_USER: {
            return {
              ...state,
              authUser: null,
              isSignedIn: false,
            }
        }
    }
}

export default reducer