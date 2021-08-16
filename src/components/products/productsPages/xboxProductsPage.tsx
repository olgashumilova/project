import React, { useState, useEffect } from 'react'
import SearchByPC from '@Components/products/searchByPlatforms/searchByPC.tsx'
import ProductsPage from '@Components/products/productsPage.tsx'
import { getProductsAPI } from '@/api/api'

import '@Components/searchBar/searchBar.scss'

const XboxProductsPage: React.FunctionComponent = () => {

    const [xboxProducts, setXboxProducts] = useState([])

    async function filterProducts() {
        try {
            const response = await getProductsAPI
            const productsArray = response.data
            const newArr = productsArray.filter((game) => game.platform.xbox )
            setXboxProducts(newArr)
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
                title = 'PC'
                searchbar = { <SearchByPC /> }
                productPlatform = { xboxProducts }
            />
        </div>
    ) 
}

export default XboxProductsPage