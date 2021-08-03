import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'

import  getUsers from '../header/header'
import { getArrayOfUsers } from "@/api/api.js";

const SignInModal: React.FunctionComponent = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isSignedIn, setIsSignedIn] = useState(false)

    async function signIn() {
        try {
            await axios.post('http://localhost:3001/signin', {login, password}).then((response) => {
                Swal.fire(response.data)
            })      
                
        } catch (error) {
            console.log(error);         
        }
        
    }

    return (
        <div>
            {isSignedIn ? (
                <Redirect to = {ROUTES.USER}></Redirect>
            ) : (
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
                    </div>

                    <button 
                        className = 'modalwindow__button'
                        type = 'submit'
                        onClick = {() => { signIn() }}>
                            Submit
                    </button>
                </div>
                
            )}

        </div>
    )
}

export default SignInModal
