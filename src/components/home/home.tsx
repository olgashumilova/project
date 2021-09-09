import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

import { getTopGamesAPI, getRecentProductsAPI, getProductsAPI } from '@/api/api'
import { getProductsArray } from '@/redux/actions/actions.ts'

import { IGamesArray } from '@/interfaces.ts'

const HomeComponent: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const [topGames, setTopGames] = useState([])
    const [recentProducts, setRecentProducts] = useState([])

    const products = useSelector(state => state.products)

    async function getProducts(): Promise<void> {
        try {
            await getProductsAPI.then((response) => {
                dispatch(getProductsArray(response.data))
            })
        } catch (error) {
            console.error(error);         
        }   
    }

    async function fetchData (): Promise<void> {
        await getTopGamesAPI.then((response) => {
            setTopGames(response.data)
        }).catch ((error) => {
            console.error(error);
        })
    }

    async function getRecentProducts (): Promise<void> {
        await getRecentProductsAPI.then((response) => {
            setRecentProducts(products.length !== 0 ? products.slice(Math.max(products.length - 3, 0)) : response.data)
        }).catch ((error) => {
            console.error(error);
        })
    }

    useEffect(() => {
        getProducts()
        fetchData()
    }, [])

    useEffect(() => {
        getRecentProducts()
    }, [products])
    

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
                                <React.Fragment key = {index}>
                                    <GameCard
                                        backgroundImage = {game.image}
                                        description = {game.description}
                                        ageLimit = {`${game.ageLimit} +`}
                                        price = {`Price: ${game.price}$`}
                                    />
                                </React.Fragment>
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
