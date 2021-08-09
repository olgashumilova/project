import axios from 'axios'

// Get queries
export const getTopGamesAPI = axios.get('http://localhost:3001/getTopGames')
export const getArrayOfUsersAPI = axios.get('http://localhost:3001/getUsersArray')

// Post queries
export const signUpUrlAPI = 'http://localhost:3001/signup'
export const signInUrlAPI = 'http://localhost:3001/signin'