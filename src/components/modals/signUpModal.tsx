import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'

import { setUser } from '@/redux/actions/actions.ts';
import { signUpUrlAPI } from '@/api/api'

const SignUpModal: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const emptyFields = (): void => {
        setLogin('')
        setPassword('')
        setRepeatPassword('')
    }
    
    async function signUp(): Promise<void> {
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
            console.error(error); 
        }   
    }

    return (
        
        <div className = 'modal-window'>
            <div className = 'modal-window__header'>
                <p className = 'modal-window__fieldname'>Registration</p>
                <Link to = {ROUTES.HOME}>
                    <button className = 'modal-window__close-button'></button>
                </Link>
            </div>

            <div className = 'modal-window__form'>
                <div className = 'modal-window__input'>
                    <p className = 'modal-window__fieldname'>Login</p>
                    <input 
                        type="text" 
                        className = 'modal-window__input-field'
                        onChange = {(event): void => setLogin(event.target.value)}
                        value = {login}
                    />
                </div>
        
                <div className = 'modal-window__input'>
                    <p className = 'modal-window__fieldname'>Password</p>
                    <input 
                        type = 'password'
                        className = 'modal-window__input-field'
                        onChange = {(event): void => setPassword(event.target.value)}
                        value = {password}
                    />
                </div>
        
                <div className = 'modal-window__input'>
                    <p className = 'modal-window__fieldname'>Repeat password</p>
                    <input 
                        type = 'password'
                        className = 'modal-window__input-field'
                        onChange = {(event): void => setRepeatPassword(event.target.value)}
                        value = {repeatPassword}
                    />
                </div>
            </div>

            <button 
                className = 'modal-window__button'
                type = 'submit'
                onClick = {(): void => {
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