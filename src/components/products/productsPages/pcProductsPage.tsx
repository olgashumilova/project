import React, { useState, useEffect } from 'react'
import SearchByPlatform from '@Components/products/searchByPlatforms/searchByPlatform.tsx'
import ProductsPage from '@Components/products/productsPage.tsx'
import { getProductsAPI } from '@/api/api'

import '@Components/searchBar/searchBar.scss'

const PcProductsPage: React.FunctionComponent = () => {

    const [pcProducts, setPcProducts] = useState([])

    async function filterProducts() {
        try {
            const response = await getProductsAPI
            const productsArray = response.data
            const newArr = productsArray.filter((game) => game.platform.pc )
            setPcProducts(newArr)
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
                searchbar = { <SearchByPlatform searchAPI = {`http://localhost:3001/pcgames/`} /> }
                productPlatform = { pcProducts }
            />
        </div>
    ) 
}

export default PcProductsPage
