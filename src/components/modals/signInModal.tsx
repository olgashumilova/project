import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'

import { isSignedIn, getUserProfile } from '@/redux/actions/actions.ts'
import { signInUrlAPI } from '@/api/api'

const SignInModal: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const emptyFields = (): void => {
        setLogin('')
        setPassword('')
    }

    async function signIn(): Promise<void> {
        try {
            await axios.post(signInUrlAPI, {login, password}).then((response) => {
                const userData = response.data

                if (userData.login) {
                    dispatch(isSignedIn(true))
                    dispatch(getUserProfile(userData))
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
                    <p className = 'modalwindow__fieldname'>Authorization</p>
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
                            onChange = {(event): void => setLogin(event.target.value)}
                            value = {login}
                        />
                    </div>
    
                    <div className = 'modalwindow__input'>
                        <p className = 'modalwindow__fieldname'>Password</p>
                        <input 
                            type = 'password'
                            className = 'modalwindow__input-field'
                            onChange = {(event): void => setPassword(event.target.value)}
                            value = {password}
                        />
                    </div>
                </div>
                <button 
                    className = 'modalwindow__button'
                    type = 'submit'
                    onClick = {(): void => {
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