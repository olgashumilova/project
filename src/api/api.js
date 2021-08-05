import axios from 'axios'

// Get queries
export const getTopGames = axios.get('http://localhost:3001/getTopGames')
export const getArrayOfUsers = axios.get('http://localhost:3001/getUsersArray')

// Post queries
export const signUp = axios.post('http://localhost:3001/signup')