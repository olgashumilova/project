import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'

import { setUser } from '@/redux/actions/actions';
import { signUpUrlAPI } from '@/api/api'

const SignUpModal: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const emptyFields = () => {
        setLogin('')
        setPassword('')
        setRepeatPassword('')
    }
    
    async function signUp() {
        try {
            await axios.post(signUpUrlAPI, {login, password}).then((response) => {
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
                <p className = 'modalwindow__fieldname'>Registration</p>
                <Link to = {ROUTES.HOME}>
                    <button className = 'modalwindow__close-button'></button>
                </Link>
            </div>

            <div className = 'modalwindow__form'>
                <div className = 'modalwindow__input'>
                    <p className = 'modalwindow__fieldname'>Login</p>
                    <input 
                        type="text" 
                        className = 'modalwindow__input-field'
                        onChange = {(event) => setLogin(event.target.value)}
                        value = {login}
                    />
                </div>
        
                <div className = 'modalwindow__input'>
                    <p className = 'modalwindow__fieldname'>Password</p>
                    <input 
                        type = 'password'
                        className = 'modalwindow__input-field'
                        onChange = {(event) => setPassword(event.target.value)}
                        value = {password}
                    />
                </div>
        
                <div className = 'modalwindow__input'>
                    <p className = 'modalwindow__fieldname'>Repeat password</p>
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