import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import SearchByPlatform from '@Components/products/searchByPlatforms/searchByPlatform.tsx'
import ProductsPage from '@Components/products/productsPage.tsx'
import { getProductsAPI } from '@/api/api'

import '@Components/searchBar/searchBar.scss'

const XboxProductsPage: React.FunctionComponent = () => {

    const products = useSelector(state => state.products)
    
    const [xboxProducts, setXboxProducts] = useState([])
    const [xboxProductsFromAPI, setXboxProductsFromAPI] = useState([])

    async function filterProducts(): Promise<void> {
        try {
            const response = await getProductsAPI
            const productsArray = response.data
            const newArr = productsArray.filter((game) => game.platform.xbox )
            setXboxProductsFromAPI(newArr)          
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(() => {
        filterProducts()
        setXboxProducts(products.filter((game) => game.platform.xbox ))
    }, [products])
                      
    return (
        <div>
            <ProductsPage
                title = 'Xbox One'
                searchbar = { <SearchByPlatform searchAPI = {`http://localhost:3001/xboxgames/`}/> }
                productPlatform = { xboxProducts.length !== 0 ? xboxProducts : xboxProductsFromAPI }
                platform = 'xbox'
            />
        </div>
    ) 
}

export default XboxProductsPage