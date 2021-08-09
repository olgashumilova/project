import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ROUTES from '@Components/routes.ts'

import { getProfileAPI } from '@/api/api'

const UserPage: React.FunctionComponent = () => {

    const [userProfile, setUserProfile] = useState([])

    useEffect(() => {
    
      fetchData();

    }, [])

    async function fetchData() {
        try {
            await getProfileAPI.then((response) => {
                const responseProfile = response.data

                if (responseProfile.length !== 0) {
                    setUserProfile(response.data)
                } else if (responseProfile.length === 0) {
                    setUserProfile([])
                }      
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className = 'user-profile-container' id = 'box'>

            {userProfile.map((user) => {         
                return (
                  <div className = 'user-profile' key = {user.id}>
                    <p className = 'user-profile__title'>{user.login}&#39;s profile page</p>
                    <p className = 'user-profile__description'>{user.description}</p>
                    <img className = 'user-profile__image' src = {user.userImage}></img>
                  </div>
                )
            })}

            <Link to = {ROUTES.EDIT_USER}>
                <button className = 'user-profile__button'>Edit profile</button>
            </Link>
        </div>
    )
}

export default UserPage
