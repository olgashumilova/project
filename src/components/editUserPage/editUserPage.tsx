import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'
import ChangePassword from '@Components/modals/changePassword.tsx'

import { saveProfileUrlAPI } from '@/api/api'
import { getUserProfile } from '../../redux/actions/actions'

const EditUserPage: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false)

    const [newLogin, setNewLogin] = useState('')
    const [description, setDescription] = useState('')
    const [userImage, setUserImage] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const emptyFields = useCallback (() => {
        setNewLogin('')
        setDescription('')
    },[])

    const changeProfile = async () => {
        try {
            await axios.post(saveProfileUrlAPI, { newLogin, description, userImage }).then((response) => {
                const userData = response.data
                
                if (userData.description) {
                    localStorage.removeItem('username')
                    localStorage.setItem('username', userData.login)              
                    Swal.fire('Your profile has been changed!')
                    setRedirect(true)
                } else {
                    Swal.fire(userData)
                }              
            })
        } catch (error) {
            console.log(error); 
        }
    }

    function modalRenderer() {
        if (showModal) {
            return <ChangePassword />
        } else {
            null
        }  
    }

    const displayImage = () => {
        if (userImage === null) {
            return <div className = 'userpage__image-inner'>No picture</div>
        } else {
            return <img className = 'userpage__user-image' src = {userImage} alt = 'User image' />
        }
    }

    return (
        <div className = 'userpage'>
            
        <div className = 'modalportal'>{modalRenderer()}</div>

            <p className = 'userpage__title'>Edit profile</p>

            <div className = 'userpage__main'>

                <div className = 'userpage__userpic-container'>
                    <div className = 'userpage__image'>
                        {displayImage()}
                    </div>
                    <input 
                        type = 'file' 
                        className = 'userpage__input' 
                        onChange = {(event) => setUserImage(URL.createObjectURL(event.target.files[0]))}>
                    </input>     
                </div>

                <div className = 'userpage__profile-desc'>
                    <p>Change login</p>
                    <input 
                        type = 'text' 
                        className = 'userpage__input'
                        onChange = {(event) => setNewLogin(event.target.value)}
                        value = {newLogin}>
                    </input>

                    <p>Add profile description</p>
                    <textarea 
                        className = 'userpage__input userpage__input-description'
                        onChange = {(event) => setDescription(event.target.value)}
                        value = {description}>
                    </textarea>
                </div>

                <div className = 'userpage__buttons'>
                    <button className = 'userpage__button' onClick = {() => {changeProfile(); emptyFields()}}>Save profile</button>
                    <button className = 'userpage__button' onClick = {() => setShowModal(!showModal)}>Change password</button>
                    <Link className = 'userpage__button' to = {ROUTES.USER}>
                        <button className = 'userpage__button-back'>Back</button>
                    </Link>
                </div>
            </div>
            {redirect ? <Redirect to = {ROUTES.USER}></Redirect> : null}
        </div>
    )
}

export default EditUserPage
