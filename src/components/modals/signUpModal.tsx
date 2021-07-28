import React, { useState } from 'react'
import axios from 'axios'

const SingUpModal: React.FunctionComponent = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const onChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {

        if (fieldName === 'login') {
            setLogin(event.target.value)

        } else if (fieldName === 'password') {
            setPassword(event.target.value)

        } else if (fieldName === 'repeatPassword') {
            setRepeatPassword(event.target.value)
        }
    }

    return (
        <div className = 'modalwindow'>
            <div className = 'modalwindow__header'>
                <p>Registration</p>
                <button className = 'modalwindow__close-button'>x</button>
            </div>

            <div className = 'modalwindow__form'>
                <div className = 'modalwindow__input'>
                    <p>Login</p>
                    <input 
                        type="text" 
                        className = 'modalwindow__input-field'
                        onChange = {(event) => onChange(event, 'userName')} 
                    />
                </div>
        
                <div className = 'modalwindow__input'>
                    <p>Password</p>
                    <input 
                        type="text" 
                        className = 'modalwindow__input-field'
                        onChange = {(event) => onChange(event, 'userName')}
                    />
                </div>
        
                <div className = 'modalwindow__input'>
                    <p>Repeat password</p>
                    <input 
                        type="text" 
                        className = 'modalwindow__input-field'
                        onChange = {(event) => onChange(event, 'userName')}
                    />
                </div>
            </div>

            <button 
                className = 'modalwindow__button'
                type = 'submit'
                onClick = {async() => {
                    const response = await axios.put('http://localhost:3001/sign-up', {
                        login,
                        password,
                    })
                        console.log(response.data);
                }}>Submit</button>
        </div>
    )
}

export default SingUpModal
