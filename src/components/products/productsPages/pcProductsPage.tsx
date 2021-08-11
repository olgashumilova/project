import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getProductsAPI } from '@/api/api'
import SearchProductsPage from '@Components/products/searchProductsPage.tsx'

import SearchByPC from '@Components/products/searchByPlatforms/searchByPC.tsx';
import '@Components/searchBar/searchBar.scss'

// Game Card
import GameCard from '@Components/gameCard/gameCard.tsx'
import '@Components/gameCard/gameCard.scss'

const PcProductsPage: React.FunctionComponent = () => {

    const filteredProducts = useSelector(state => state.filteredProducts)

    const [productsArray, setProductsArray] = useState([])
    const [pcProducts, setPcProducts] = useState([])

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

    const filterPcGames = () => {
        const newArr = productsArray.filter((game) => game.platform.pc )
        setPcProducts(newArr)
    }
    
    useEffect(() => {
        filterPcGames()
    }, [productsArray])

    function displayGames() {
        if (filteredProducts.length === 0) {
            return (
                pcProducts.map((game) => {
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
                            {game.platform.pc ? (
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
                title = 'PC'
                searchbar = {<SearchByPC />}
                filterByPlatform = {displayGames()}
            />
        </div>
    ) 
}

export default PcProductsPage
