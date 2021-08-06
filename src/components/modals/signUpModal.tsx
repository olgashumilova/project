import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'

import { setUser } from '@/redux/actions/actions';

const SignUpModal: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const emptyFields = useCallback (() => {
        setLogin('')
        setPassword('')
        setRepeatPassword('')
    },[])
    
    async function signUp() {
        try {
            await axios.post('http://localhost:3001/signup', {login, password}).then((response) => {
                const userData = response.data                   
                if (userData.login) {
                    dispatch(setUser(userData))                 
                    Swal.fire('You\'ve been signed up!')
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
        
        <div className = 'modalwindow'>
            <div className = 'modalwindow__header'>
                <p>Registration</p>
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
        
                <div className = 'modalwindow__input'>
                    <p>Repeat password</p>
                    <input 
                        type = 'password'
                        className = 'modalwindow__input-field'
                        onChange = {(event) => setRepeatPassword(event.target.value)}
                        value = {repeatPassword}
                    />
                </div>
            </div>

            <button 
                className = 'modalwindow__button'
                type = 'submit'
                onClick = {() => {
                    if (password === repeatPassword) {
                        signUp()
                        emptyFields()     
                    } else {
                        Swal.fire('Passwords don\'t match')
                        emptyFields()
                }}}>Submit</button>
            {redirect ? <Redirect to = {ROUTES.SIGNIN}></Redirect> : null}
        </div>
    )
}

export default SignUpModal