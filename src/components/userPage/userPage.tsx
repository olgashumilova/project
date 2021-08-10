import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'

import { getProfileAPI } from '@/api/api'
import changeProfile from '../editUserPage/editUserPage'

const UserPage: React.FunctionComponent = () => {

    const user = useSelector(state => state.userProfile)
    const userName = localStorage.getItem('username')

    return (
        <div className = 'user-profile-container' id = 'box'>

            <div className = 'user-profile' key = {user.index}>
              <p className = 'user-profile__title'>{user.login || userName}&#39;s profile page</p>
              <div className = 'user-profile-main'>
                  <div className = 'user-profile-main__image-container'>
                      <img className = 'user-profile-main__image' src = {user.userImage} alt = 'User profile image' />
                  </div>
                  <div className = 'user-profile-main__text-container'>
                      <p className = 'user-profile-main__Login'>Login: {user.login || userName}</p>
                      <p className = 'user-profile-main__description'>Profile description: {user.description}</p>
                  </div>
              </div>
            </div>

            <Link to = {ROUTES.EDIT_USER}>
                <button className = 'user-profile__button'>Edit profile</button>
            </Link>
        </div>
    )
}

export default UserPage
