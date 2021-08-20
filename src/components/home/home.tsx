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

import { getTopGamesAPI, getRecentProductsAPI } from '../../api/api.js'

const HomeComponent: React.FunctionComponent = () => {

    interface IGamesArray {
        id: number,
        name: string,
        ageLimit: string,
        rating: number,
        image: string,
        description: string,
        price: number,
    }

    const [topGames, setTopGames] = useState([])
    const [recentProducts, setRecentProducts] = useState([])
    

    useEffect(() => {
   
        fetchData()
        getRecentProducts()

    }, [])

    async function fetchData () {
        await getTopGamesAPI.then((response) => {
            setTopGames(response.data)
        }).catch ((error) => {
            console.log(error);
        })
    }

    async function getRecentProducts () {
        await getRecentProductsAPI.then((response) => {
            setRecentProducts(response.data)
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
                   <Link className = 'home__link-container' to = {ROUTES.PC_PAGE}>
                       <div className = 'home__logos-container'>
                          <img className = 'home__device-logo' src = {pcLogo} alt = "Pc logo"/>
                          <p className = 'home__text'>PC</p>
                       </div>
                    </Link>
                    <Link className = 'home__link-container' to = {ROUTES.PLAYSTATION_PAGE}>
                       <div className = 'home__logos-container'>
                          <img className = 'home__device-logo' src = {playstationLogo} alt = "Playstation Logo"/>
                          <p className = 'home__text'>Playstation 5</p>
                       </div>
                    </Link>
                       <Link className = 'home__link-container' to = {ROUTES.XBOX_PAGE}>
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
                        {recentProducts.map((game, index) => {
                            return (
                                <div key = {index}>
                                    <GameCard
                                        backgroundImage = {game.image}
                                        description = {game.description}
                                        ageLimit = {`${game.ageLimit} +`}
                                        price = {`Price: ${game.price}$`}
                                    />
                                </div>
                            ) 
                        })}
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
                                            ageLimit = {`${item.ageLimit} +`}
                                            price = {`Price: ${item.price}$`}
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
