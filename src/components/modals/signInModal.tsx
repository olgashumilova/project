import React, { useState, useCallback } from "react"
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'

import { isSignedIn } from '@/redux/actions/actions'

const SignInModal: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const emptyFields = useCallback (() => {
        setLogin('')
        setPassword('')
    },[])

    async function signIn() {
        try {
            await axios.post('http://localhost:3001/signin', {login, password}).then((response) => {
                const userData = response.data

                if (userData.login) {
                    dispatch(isSignedIn(true))
                    localStorage.setItem('username', userData.login)          
                    Swal.fire(`Welcome, ${userData.login}`)
                    setRedirect(true)
                } else {
                    Swal.fire(response.data)
                }
            })        
        } catch (error) {
            console.log(error);         
        }   
    }
    

    return (
        <div>
            <div className = 'modalwindow'>
                <div className = 'modalwindow__header'>
                    <p>Authorization</p>
                    <Link to = {ROUTES.HOME}>
                        <button className = 'modalwindow__close-button'>x</button>
                    </Link>
                </div>
                <div className = 'modalwindow__form'>
                    <div className = 'modalwindow__input'>
                        <p>Login</p>
                        <input 
                            type="text" 
                            className = 'modalwindow__input-field'
                            onChange = {(event) => setLogin(event.target.value)}
                            value = {login}
                        />
                    </div>
    
                    <div className = 'modalwindow__input'>
                        <p>Password</p>
                        <input 
                            type = 'password'
                            className = 'modalwindow__input-field'
                            onChange = {(event) => setPassword(event.target.value)}
                            value = {password}
                        />
                    </div>
                </div>
                <button 
                    className = 'modalwindow__button'
                    type = 'submit'
                    onClick = {() => {
                        signIn()
                        emptyFields()
                    }}>
                        Submit
                </button>
                {redirect ? <Redirect to = {ROUTES.USER}></Redirect> : null}
            </div>

        </div>
    )
}

export default SignInModal