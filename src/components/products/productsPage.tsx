import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

// Game Card
import GameCard from '@Components/gameCard/gameCard.tsx'
import '@Components/gameCard/gameCard.scss'

import SearchProductsPage from '@Components/products/searchProductsPage.tsx'

const ProductsPage: React.FunctionComponent<{title, filterByPlatform, searchbar, productPlatform, displayGames, platform}> = (props) => {

    ProductsPage.propTypes = {
        title: PropTypes.string,
        filterByPlatform: PropTypes.array,
        searchbar: PropTypes.object,
        displayGames: PropTypes.array,
        productPlatform: PropTypes.array,
        platform: PropTypes.string,
    }

    const productPlatform = props.productPlatform
    const platform = props.platform
    const filteredProducts = useSelector(state => state.filteredProducts)

    function displayGames(): void {
        if (filteredProducts.length === 0) {
            return (
                productPlatform.map((game) => {
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
        } else if (filteredProducts.length !== 0) {
            return (
                filteredProducts.map((game, index) => {
                    if (platform in game.platform) {
                        return (
                            <div key = {index}>
                                <GameCard className = 'catalog-gamecard' 
                                    backgroundImage = {game.image} 
                                    description = {game.description}
                                    ageLimit = {`${game.ageLimit} +`}
                                    price = {`Price: ${game.price}$`}
                                />
                            </div>  
                        )
                    }
                })
            )
        }
    }

    return (
        <div>
            {props.platform}
            <SearchProductsPage
                title = {props.title}
                searchbar = {props.searchbar}
                filterByPlatform = {displayGames()}
            />
        </div>
    ) 
}

export default React.memo(ProductsPage)