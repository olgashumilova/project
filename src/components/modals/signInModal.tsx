import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'

import { setUser } from '../../redux/actions/actions'

const SignInModal: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    // interface IRootState {
    //     authUser: null
    // }

    const user = useSelector(state => state.authUser)

    const emptyFields = useCallback (() => {
        setLogin('')
        setPassword('')
    },[])

    async function signIn() {
        try {
            await axios.post('http://localhost:3001/signin', {login, password}).then((response) => {
                console.log(response.data)
                localStorage.setItem(response.data.id, response.data.login)
                dispatch(() => setUser(response.data))
            })        
        } catch (error) {
            console.log(error);         
        }   
    }

    return (
        <div>
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
                    onClick = {() => {
                        signIn()
                        emptyFields()
                    }}>
                        Submit
                </button>
                {user ? <Redirect to = {ROUTES.USER}></Redirect> : null}
            </div>

        </div>
    )
}

export default SignInModal

// const SignInModal = ({ message, isOpen, onClose, children }) => {
//     if (!isOpen) return null
//     return ReactDOM.createPortal(    
//       <div className="modal">
//         <span className="message">{message}</span>
//         <button onClick={onClose}>Close</button>
//       </div>,
//       domNode)
// }

// export default SignInModal
