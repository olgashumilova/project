import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import ROUTES from '@Components/routes.ts'

// Platform Logos Images
import pcLogo from '@Assets/gamePlatformsLogos/pcLogo.png'
import playstationLogo from '@Assets/gamePlatformsLogos/playstationLogo.png'
import xboxLogo from '@Assets/gamePlatformsLogos/xboxLogo.png'

// Search Bar Component
import SearchBar from '@Components/searchBar/searchBar.tsx'
import '@Components/searchBar/searchBar.scss'

// Game Card
import GameCard from '@Components/gameCard/gameCard.tsx'
import '@Components/gameCard/gameCard.scss'

//Game Card Images
import overwatch from '@Assets/gamesImages/overwatch.jpg'
import minecraft from '@Assets/gamesImages/minecraft.jpg'
import terraria from '@Assets/gamesImages/terraria.jpg'

import { getTopGamesAPI } from '../../api/api.js'

const HomeComponent: React.FunctionComponent = () => {

    interface IGamesArray {
        id: number,
        name: string,
        ageLimit: string,
        rating: number,
        image: string,
        description: string,
    }

    const [topGames, setTopGames] = useState([])

    useEffect(() => {
   
        fetchData()

    }, [])

    async function fetchData () {
        await getTopGamesAPI.then((response) => {
            setTopGames(response.data)
        }).catch ((error) => {
            console.log(error);
        })
    }

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
                    <div>
                        <p className = 'home__title'>Top rated games</p>

                        <div className = 'home__game-cards'>
                            {topGames.map((item: IGamesArray, index) => {
                            return (
                                <div key = {index}>
                                    <GameCard
                                        backgroundImage = {item.image}
                                        description = {item.description}
                                        ageLimit = {item.ageLimit}
                                    />
                                </div>
                            )})}
                        </div>                                      
                    </div>
               </div>
            </div>
            <div></div>
        </main>
    )
}

export default HomeComponent
