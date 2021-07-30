import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'

const SignInModal: React.FunctionComponent = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [usersArray, setUsersArray] = useState(null)
    const [redirect, setRedirect] = useState(false)

    async function signIn() {
        const response = await axios.post('http://localhost:3001/signin', 
        {login, password})
        Swal.fire(response.data)
        setRedirect(true)
        
        // const usersArray = await axios.get('http://localhost:3001/getUsersArray')
        // setUsersArray(usersArray)
        // console.log(usersArray);
        
    }

    return (
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
                onClick = {() => { signIn() }}>Submit</button>
        </div>
    )
}

export default SignInModal
