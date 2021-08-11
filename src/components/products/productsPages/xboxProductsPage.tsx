import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getProductsAPI } from '@/api/api'
import SearchProductsPage from '@Components/products/searchProductsPage.tsx'

import SearchByXbox from '@Components/products/searchByPlatforms/searchByXbox.tsx';
import '@Components/searchBar/searchBar.scss'

// Game Card
import GameCard from '@Components/gameCard/gameCard.tsx'
import '@Components/gameCard/gameCard.scss'
import { Item } from 'semantic-ui-react';

const XboxProductsPage: React.FunctionComponent = () => {

    const filteredProducts = useSelector(state => state.filteredProducts)

    const [productsArray, setProductsArray] = useState([])
    const [xboxProducts, setXboxProducts] = useState([])

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

    const filterXboxGames = () => {
        const newArr = productsArray.filter((game) => game.platform.xbox )
        setXboxProducts(newArr)
    }
    
    useEffect(() => {
        filterXboxGames()
    }, [productsArray])

    function displayGames() {
        if (filteredProducts.length === 0) {
            return (
                xboxProducts.map((game) => {
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
                            {game.platform.xbox ? (
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
                title = 'Xbox'
                searchbar = {<SearchByXbox />}
                filterByPlatform = {displayGames()}
            />
        </div>
    ) 
}

export default XboxProductsPage