import React, { useState } from 'react'
import ChangePassword from '../modals/changePassword'

const UserPage: React.FunctionComponent = () => {

    const [showModal, setShowModal] = useState(false)

    const displayLogin = () => {
        if (localStorage.getItem('username')) {
            return localStorage.getItem('username')
        } else if (localStorage.getItem('username') === null) {
            return 'User'
        }
    }

    function modalRenderer() {
        if (showModal) {
            return <ChangePassword />
        }    
    }

    return (
        <div className = 'userpage'>
            
        <div className = 'modalportal'>{modalRenderer()}</div>

            <p className = 'userpage__title'>{displayLogin()}&#39;s profile page</p>

            <div className = 'userpage__main'>

                <div className = 'userpage__userpic-container'>
                    <div className = 'userpage__image'>
                        <div className = 'userpage__image-inner'>No picture</div>
                    </div>
                    <button className = 'userpage__button'>Change profile picture</button>
                </div>

                <div className = 'userpage__profile-desc'>
                    <p>User Name</p>
                    <input type = 'text' className = 'userpage__input'></input>

                    <p>Profile description</p>
                    <textarea className = 'userpage__input userpage__input-description'></textarea>
                </div>

                <div className = 'userpage__buttons'>
                    <button className = 'userpage__button'>Save profile</button>
                    <button className = 'userpage__button' onClick = {() => setShowModal(!showModal)}>Change password</button>
                </div>
            </div>
        </div>
    )
}

export default UserPage
