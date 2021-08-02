import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'

const SignUpModal: React.FunctionComponent = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [isSignedUp, setIsSignedUp] = useState(false)

    async function signUp() {
        const response = await axios.post('http://localhost:3001/signup', 
        {login, password})
        Swal.fire(response.data)
        setIsSignedUp(true)
    }

    return (
        
        <div className = 'modalwindow'>
            {isSignedUp ? (
                <Redirect to = {ROUTES.SIGNIN}></Redirect>
            ) : (
                ''
            )}
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
                    />
                </div>
        
                <div className = 'modalwindow__input'>
                    <p>Password</p>
                    <input 
                        type = 'password'
                        className = 'modalwindow__input-field'
                        onChange = {(event) => setPassword(event.target.value)}
                    />
                </div>
        
                <div className = 'modalwindow__input'>
                    <p>Repeat password</p>
                    <input 
                        type = 'password'
                        className = 'modalwindow__input-field'
                        onChange = {(event) => setRepeatPassword(event.target.value)}
                    />
                </div>
            </div>

            <button 
                className = 'modalwindow__button'
                type = 'submit'
                onClick = {() => {
                    if (password === repeatPassword) {
                        signUp()                        
                    } else {
                        alert('Passwords don\'t match')
                }}}>Submit</button>
        </div>
    )
}

export default SignUpModal