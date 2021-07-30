import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import ROUTES from '@Components/routes.ts'
import { getArrayOfUsers } from '../../api/api';

const SignedInButons: React.FunctionComponent = () => {

    const [usersArray, setUsersArray] = useState([])

    useEffect(() => {
        getLoggedUserName()
    }, [usersArray])

    async function getLoggedUserName () {
        await getArrayOfUsers
        setUsersArray((await getArrayOfUsers).data)
    }

    return (
        <div className = 'header__nav'>
            <div className = 'header__list'>
                <Link className = 'header__list-element' to = {ROUTES.USER}>
                  <div className = 'header__user-icon'></div>
                  <p className = 'header__user-name'>Hello, {usersArray.map(user => user.login)}</p>
                </Link>

                <Link className = 'header__list-element' to = {ROUTES.CART}>
                    <div className = 'header__cart-icon'></div>
                </Link>

                <Link className = 'header__list-element' to = {ROUTES.HOME}>
                    <div className = 'header__logout-icon'></div>
                </Link>
            </div>
        </div>
    )
}

export default SignedInButons
