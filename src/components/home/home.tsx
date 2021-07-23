import React from 'react'
import { Link } from "react-router-dom"
import {ROUTES} from '../routes'

// Logo Images
import pcLogo from './images/logo/pcLogo.png'
import playstationLogo from './images/logo/playstationLogo.png'
import xboxLogo from './images/logo/xboxLogo.png'

// Search Bar Component
import SearchBar from '../searchBar/searchBar'
import '../searchBar/searchBar.scss'

// Products Component
import Products from '../products/products'
import '../products/products.scss'

// Game Card
import GameCard from '../gameCard/gameCard'
import '../gameCard/gameCard.scss'

//Game Card Images
import overwatch from '../../assets/gamesImages/overwatch.jpg'
import minecraft from '../../assets/gamesImages/minecraft.webp'
import terraria from '../../assets/gamesImages/terraria.jpg'

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
                   <div className = 'home__game-cards'>
                        <GameCard 
                            backgroundImage = {overwatch} 
                            description = 'Overwatch is a colorful team-based action game starring a diverse cast of powerful heroes. Travel the world, build a team, and contest objectives in exhilarating 6v6 combat.'
                            ageLimit = '12 +'
                        />
                        <GameCard 
                            backgroundImage = {minecraft} 
                            description = 'Minecraft is a sandbox game. There is a virtual land where users can create their own worlds and experiences, using building blocks, resources discovered on the site and their own creativity.'
                            ageLimit = '3 +'
                        />
                        <GameCard 
                            backgroundImage = {terraria} 
                            description = 'Terraria is a 2D sandbox game with gameplay that revolves around exploration, building, crafting, combat, survival, and mining, playable in both single-player and multiplayer modes.'
                            ageLimit = '6 +'
                        />
                    </div>
               </div>
            </div>
            <div></div>
        </main>
    )
}

export default HomeComponent
