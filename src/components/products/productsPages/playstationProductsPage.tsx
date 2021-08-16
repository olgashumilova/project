import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getProductsAPI } from '@/api/api'
import SearchProductsPage from '@Components/products/searchProductsPage.tsx'

import SearchByPlaystation from '@Components/products/searchByPlatforms/searchByPlaystation.tsx';
import '@Components/searchBar/searchBar.scss'

// Game Card
import GameCard from '@Components/gameCard/gameCard.tsx'
import '@Components/gameCard/gameCard.scss'

const PlaystationProductsPage: React.FunctionComponent = () => {

    const filteredProducts = useSelector(state => state.filteredProducts)

    const [productsArray, setProductsArray] = useState([])
    const [playstationProducts, setPlaystationProducts] = useState([])

    async function getProducts() {
        try {
            await getProductsAPI.then((response) => {
                setProductsArray(response.data)
            })        
        } catch (error) {
            console.log(error);         
        }   
    }

    useEffect(() => {
        getProducts()
    }, [])

    const filterPlaystationGames = () => {
        const newArr = productsArray.filter((game) => game.platform.playstation )
        setPlaystationProducts(newArr)
    }
    
    useEffect(() => {
        filterPlaystationGames()
    }, [productsArray])

    function displayGames() {
        if (filteredProducts.length === 0) {
            return (
                playstationProducts.map((game) => {
                    return (
                        <div key = {game.index}>
                            <GameCard className = 'catalog-gamecard' 
                                backgroundImage = {game.image} 
                                description = {game.description}
                                ageLimit = {`${game.ageLimit} +`}
                                price = {`Price: ${game.price}$`}
                            />
                        </div>
                    )
                })
            )
        } else if (filteredProducts.length !== 0){
            return (
                filteredProducts.map((game) => {
                    return (
                        <div key = {game.index}>
                            {game.platform.playstation ? (
                                <GameCard className = 'catalog-gamecard' 
                                    backgroundImage = {game.image} 
                                    description = {game.description}
                                    ageLimit = {`${game.ageLimit} +`}
                                    price = {`Price: ${game.price}$`}
                                />
                            ) : null}
                        </div>
                    )
                })
            )
        }
    }
                        
    return (
        <div>
            <SearchProductsPage
                title = 'Playstation'
                searchbar = {<SearchByPlaystation />}
                filterByPlatform = {displayGames()}
            />
        </div>
    )
}

export default PlaystationProductsPage