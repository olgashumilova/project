import axios from 'axios'

export const getTopGames = axios.get('http://localhost:3001/getTopGames')
export const signUp = axios.put('http://localhost:3001/signup')
export const getArrayOfUsers = axios.get('http://localhost:3001/getUsersArray')