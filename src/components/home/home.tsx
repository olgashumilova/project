import React from 'react'
import { Link } from "react-router-dom"
import {ROUTES} from '../routes'

// Logo images
import pcLogo from './images/logo/pcLogo.png'
import playstationLogo from './images/logo/playstationLogo.png'
import xboxLogo from './images/logo/xboxLogo.png'

// Search Bar Component
import SearchBar from '../searchBar/searchBar'
import '../searchBar/searchBar.scss'

//Products Component
import Products from '../products/products'
import '../products/products.scss'

//Game Card
import GameCard from '../gameCard/gameCard'
import '../gameCard/gameCard.scss'

import overwatch from '../gameCard/gamesImages/overwatch.jpg'

const HomeComponent: React.FunctionComponent = () => {
    return (
        <main className = 'home'>

            <SearchBar />

            <div className = 'home__main'>
               <div className = 'home__categories'>
                   <p className = 'home__title'>Categories</p>
                   <div className = 'home__categories-logos'>
                   <Link className = 'home__link-container' to = {ROUTES.PRODUCTS}>
                       <div className = 'home__logos-container'>
                          <img className = 'home__device-logo' src = {pcLogo} alt = "Pc logo"/>
                          <p className = 'home__text'>PC</p>
                       </div>
                    </Link>
                    <Link className = 'home__link-container' to = {ROUTES.PRODUCTS}>
                       <div className = 'home__logos-container'>
                          <img className = 'home__device-logo' src = {playstationLogo} alt = "Playstation Logo"/>
                          <p className = 'home__text'>Playstation 5</p>
                       </div>
                    </Link>
                       <Link className = 'home__link-container' to = {ROUTES.PRODUCTS}>
                            <div className = 'home__logos-container'>                          
                                <img className = 'home__device-logo' src = {xboxLogo} alt = "Xbox logo"/>
                                <p className = 'home__text'>XBox One</p>
                            </div> 
                       </Link>
                        
                   </div>
               </div>
               <div>
                   <p className = 'home__title'>New games</p>
                   <div>
                       <GameCard backgroundImage = {overwatch}/>
                       <GameCard backgroundImage = {overwatch}/>
                       <GameCard backgroundImage = {overwatch}/>
                   </div>
               </div>
            </div>
            <div></div>
        </main>
    )
}

export default HomeComponent
