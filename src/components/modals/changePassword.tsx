import React, { useState, useCallback } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'

import { changePasswordUrlAPI } from "@/api/api"

const ChangePassword:React.FunctionComponent = () => {

    const [showModal, setShowModal] = useState(true)

    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const emptyFields = useCallback (() => {
        setPassword('')
        setRepeatPassword('')
    },[])

    const changePassword = async (): Promise<void> => {
        try {
            await axios.post(changePasswordUrlAPI, { password }).then((response) => {
                Swal.fire(response.data)               
            })
        } catch (error) {
            console.error(error); 
        }
    }

    const comparePasswords = (): void => {
        if (password === repeatPassword) {
            changePassword()
            emptyFields()     
        } else {
            Swal.fire('Passwords don\'t match')
            emptyFields()
        }
    }

    return (

        <div className = {showModal === true ? 'modal-wrapper' : 'modal-wrapper_hidden'}>
            <div className = {showModal === true ? 'modal-window' : 'modal-window_hidden'}>
                <div className = 'modal-window__header'>
                    <p >Change password</p>
                    <button className = 'modal-window__close-button' onClick = {(): void => setShowModal(!showModal)}></button>
                </div>
                <div className = 'modal-window__form'>

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
                    onClick = {comparePasswords}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default ChangePassword