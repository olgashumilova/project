import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getProductsAPI } from '@/api/api'
import SearchProductsPage from '@Components/products/searchProductsPage.tsx'

// Game Card
import GameCard from '@Components/gameCard/gameCard.tsx'
import '@Components/gameCard/gameCard.scss'

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
        console.log(newArr);
    }
    
    useEffect(() => {
        filterXboxGames()
    }, [productsArray])

    console.log(filteredProducts.find(item => item.platform.xbox));

    function func() {
        if (filteredProducts.length === 0) {
            return (
                xboxProducts.map((game) => {
                    return (
                        <div key = {game.index}>
                            <GameCard className = 'catalog-gamecard' 
                                backgroundImage = {game.image} 
                                description = {game.description}
                                ageLimit = {game.ageLimit}
                                price = {`Price: ${game.price}$`}
                            />
                        </div>
                    )
                })
            )
        } else if (filteredProducts.length !== 0 && filteredProducts.find(item => item.platform.xbox)){
            return (
                filteredProducts.map((game) => {
                    return (
                        <div key = {game.index}>
                            <GameCard className = 'catalog-gamecard' 
                                backgroundImage = {game.image} 
                                description = {game.description}
                                ageLimit = {game.ageLimit}
                                price = {`Price: ${game.price}$`}
                            />
                        </div>
                    )
                })
            )
        }
    }
                        
    return (
        <div>
            <SearchProductsPage title = 'Xbox' filterByPlatform = {func()}/>
        </div>
    ) 
}

export default XboxProductsPage