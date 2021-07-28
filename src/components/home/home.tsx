import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {ROUTES} from '../routes'
import axios from 'axios'

// Platform Logos Images
import pcLogo from '@GamePlatformsLogos/pcLogo.png'
import playstationLogo from '@GamePlatformsLogos/playstationLogo.png'
import xboxLogo from '@GamePlatformsLogos/xboxLogo.png'

// Search Bar Component
import SearchBar from '../searchBar/searchBar'
import '../searchBar/searchBar.scss'

// Game Card
import GameCard from '../gameCard/gameCard'
import '../gameCard/gameCard.scss'

//Game Card Images
import overwatch from '@GamesImages/overwatch.jpg'
import minecraft from '@GamesImages/minecraft.jpg'
import terraria from '@GamesImages/terraria.jpg'

const HomeComponent: React.FunctionComponent = () => {

    interface IGamesArrray {
        index: number,
        id: number,
        name: string,
        ageLimit: string,
        rating: number,
        image: string,
        description: string,
    }

    const [topGames, setTopGames] = useState([])

    async function fetchData() {
        await axios.get('http://localhost:3001/getTopGames').then((response) => {
            setTopGames(response.data)
        }).catch (() => {
            alert('Server is not responding');
        })
    }
    fetchData()

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
                            {topGames.map((item: IGamesArrray) => {
                            return (
                                <div key = {item.index}>
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
