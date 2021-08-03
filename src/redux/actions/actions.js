import { ACTION_TYPES } from '../const/actionTypes';

export const getUsersArray = (users) => ({
    type: ACTION_TYPES.GET_USERS,
    payload: users,
})

export const setUser = (payload) => ({
    type: ACTION_TYPES.SET_USER,
    payload: {...payload}
})

// export const deleteUser = (payload) => ({
//     type: ACTION_TYPES.SET_USER,
//     payload: {...payload}
// })