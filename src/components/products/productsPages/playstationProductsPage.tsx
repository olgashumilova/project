import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import SearchByPlatform from '@Components/products/searchByPlatforms/searchByPlatform.tsx'
import ProductsPage from '@Components/products/productsPage.tsx'
import { getProductsAPI } from '@/api/api'

import '@Components/searchBar/searchBar.scss'

const PlaystationProductsPage: React.FunctionComponent = () => {

    const products = useSelector(state => state.products)
    
    const [playstationProducts, setPlaystationProducts] = useState([])
    const [playstationProductsFromAPI, setPlaystationProductsFromAPI] = useState([])

    async function filterProducts(): Promise<void> {
        try {
            const response = await getProductsAPI
            const productsArray = response.data
            const newArr = productsArray.filter((game) => game.platform.playstation )
            setPlaystationProductsFromAPI(newArr)          
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(() => {
        filterProducts()
        setPlaystationProducts(products.filter((game) => game.platform.playstation ))
    }, [products])
                      
    return (
        <div>
            <ProductsPage
                title = 'Playstation'
                searchbar = { <SearchByPlatform searchAPI = {`http://localhost:3001/playstationgames/`} /> }
                productPlatform = { playstationProducts.length !== 0 ? playstationProducts : playstationProductsFromAPI }
                platform = 'playstation'
            />
        </div>
    ) 
}

export default PlaystationProductsPage