import axios from 'axios'

// Get queries
export const getTopGamesAPI = axios.get('http://localhost:3001/getTopGames')
export const getArrayOfUsersAPI = axios.get('http://localhost:3001/getUsersArray')
export const getProfileAPI = axios.get('http://localhost:3001/getProfile')
export const getProductsAPI = axios.get('http://localhost:3001/getProducts')

// Post queries
export const signUpUrlAPI = 'http://localhost:3001/signup'
export const signInUrlAPI = 'http://localhost:3001/signin'
export const saveProfileUrlAPI = 'http://localhost:3001/saveProfile'
export const changePasswordUrlAPI = 'http://localhost:3001/changePassword'
export const sendOrderToServerAPI = 'http://localhost:3001/order'
