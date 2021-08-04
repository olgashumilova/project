import axios from 'axios';
import { ACTION_TYPES } from '../const/actionTypes';

// Users
export const getUsersArray = (users) => ({
    type: ACTION_TYPES.GET_USERS,
    payload: users,
})

export const setUser = (payload) => ({
    type: ACTION_TYPES.SET_USER,
    payload: payload,
})

export const deleteUser = (payload) => ({
    type: ACTION_TYPES.DELETE_USER,
    payload: payload,
})

// Products
export const getProducts = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/getProducts').then((response) => {
          dispatch({
            type: ACTION_TYPES.GET_PRODUCTS,
            payload: response.data,
          })
        })
    }
}