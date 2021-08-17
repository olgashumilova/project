import React, { useState, useEffect } from 'react'
import SearchByPlatform from '@Components/products/searchByPlatforms/searchByPlatform.tsx'
import ProductsPage from '@Components/products/productsPage.tsx'
import { getProductsAPI } from '@/api/api'

import '@Components/searchBar/searchBar.scss'

const PlaystationProductsPage: React.FunctionComponent = () => {

    const [playstationProducts, setPlaystationProducts] = useState([])

    async function filterProducts() {
        try {
            const response = await getProductsAPI
            const productsArray = response.data
            const newArr = productsArray.filter((game) => game.platform.playstation )
            setPlaystationProducts(newArr)
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(() => {
        filterProducts()
    }, [])
                      
    return (
        <div>
            <ProductsPage
                title = 'Playstation'
                searchbar = { <SearchByPlatform searchAPI = {`http://localhost:3001/playstationgames/`} /> }
                productPlatform = { playstationProducts }
            />
        </div>
    ) 
}

export default PlaystationProductsPage