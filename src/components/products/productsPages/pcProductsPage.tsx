import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SearchByPlatform from '@Components/products/searchByPlatforms/searchByPlatform.tsx'
import ProductsPage from '@Components/products/productsPage.tsx'
import { getProductsAPI } from '@/api/api'

import '@Components/searchBar/searchBar.scss'

const PcProductsPage: React.FunctionComponent = () => {

    const products = useSelector(state => state.products)

    const [pcProducts, setPcProducts] = useState([])
    const [pcProductsFromAPI, setPcProductsFromAPI] = useState([])

    async function filterProducts() {
        try {
            const response = await getProductsAPI
            const productsArray = response.data
            const newArr = productsArray.filter((game) => game.platform.pc )
            setPcProductsFromAPI(newArr)
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(() => {
        filterProducts()
        setPcProducts(products.filter((game) => game.platform.pc ))
    }, [products])
                      
    return (
        <div>
            <ProductsPage
                title = 'PC'
                searchbar = { <SearchByPlatform searchAPI = {`http://localhost:3001/pcgames/`} /> }
                productPlatform = { pcProducts.length !== 0 ? pcProducts : pcProductsFromAPI }
                platform = 'pc'
            />
        </div>
    ) 
}

export default PcProductsPage
