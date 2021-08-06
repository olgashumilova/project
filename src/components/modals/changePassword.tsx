import React, { useState, useCallback } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router'
import ROUTES from '@Components/routes.ts'

const ChangePassword:React.FunctionComponent = () => {

    const [showModal, setShowModal] = useState(true)

    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const emptyFields = useCallback (() => {
        setPassword('')
        setRepeatPassword('')
    },[])

    const changePassword = async () => {
        try {
            await axios.post('http://localhost:3001/changePassword', { password }).then((response) => {
                Swal.fire(response.data)               
            })
        } catch (error) {
            console.log(error); 
        }
    }

    return (

        <div className = 'modal-wrapper'>
            <div className = {showModal === true ? 'modalwindow' : 'modalwindow_hidden'}>
                <div className = 'modalwindow__header'>
                    <p>Change password</p>
                    <button className = 'modalwindow__close-button' onClick = {() => setShowModal(!showModal)}>x</button>
                </div>
                <div className = 'modalwindow__form'>

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
                            changePassword()
                            emptyFields()     
                        } else {
                            Swal.fire('Passwords don\'t match')
                            emptyFields()
                    }}}>
                    Submit
                </button>
                {redirect ? <Redirect to = {ROUTES.EDIT_USER}></Redirect> : null}
            </div>
        </div>
    )
}

export default ChangePassword