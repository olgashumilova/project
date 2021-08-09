import React, { useEffect, useState } from 'react'
import { string } from 'prop-types';

// Search Bar Component
import SearchBar from '@Components/searchBar/searchBar.tsx'
import '@Components/searchBar/searchBar.scss'

// Game Card
import GameCard from '@Components/gameCard/gameCard.tsx'
import '@Components/gameCard/gameCard.scss'

import { getProductsAPI } from '../../api/api';

const SearchProductsPage: React.FunctionComponent = (props) => {

    const [productsArray, setProductsArray] = useState([])
    

    SearchProductsPage.propTypes = {
        title: string,
    }

    useEffect(() => {

        getProducts()

    }, [])

    async function getProducts() {
        try {
            await getProductsAPI.then((response) => {
                setProductsArray(response.data)
            })        
        } catch (error) {
            console.log(error);         
        }   
    }

    const filter = () => {
        for (let i = 0; i < productsArray.length; i++) {
            const newArr = productsArray.filter((game) => game.platform.pc )
            console.log(newArr)
        }
    }
    filter()

    return (
        <div className = 'products-page'>

            <div className = 'products-page__filters'>
                <p className = 'products-page__title'>{props.title}</p>
                <p className = 'products-page__title'>Sort</p>

                <div className = 'products-page__container'>
                    <p>Criteria</p>
                    <select>
                        <option>Name</option>
                        <option>Rating</option>
                        <option>Price</option>
                        <option>Age Limit</option>
                    </select>
                </div>
                
                <div className = 'products-page__container'>
                    <p>Type</p>
                    <select>
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>
                </div>

                <div className = 'products-page__selection'>
                    <p className = 'products-page__title'>Genres</p>
                    <ul className = 'products-page__selection-list'>
                        <li>
                            <input type = 'checkbox'></input>
                            <span className = 'products-page__selectors'>All genres</span>
                        </li>

                        <li>
                            <input type = 'checkbox'></input>
                            <span className = 'products-page__selectors'>Shooter</span> 
                        </li>

                        <li>
                            <input type = 'checkbox'></input>
                            <span className = 'products-page__selectors'>Arcade</span>
                        </li>

                        <li>
                            <input type = 'checkbox'></input>
                            <span className = 'products-page__selectors'>Survive </span>                      
                        </li>
                    </ul>
                </div>

                <div className = 'products-page__selection'>
                    <p className = 'products-page__title'>Age</p>
                    <ul className = 'products-page__selection-list'>
                        <li>
                            <input type = 'checkbox'></input>
                            <span className = 'products-page__selectors'>All ages</span>
                        </li>

                        <li>
                            <input type = 'checkbox'></input>
                            <span className = 'products-page__selectors'>3+</span> 
                        </li>

                        <li>
                            <input type = 'checkbox'></input>
                            <span className = 'products-page__selectors'>6+</span>
                        </li>

                        <li>
                            <input type = 'checkbox'></input>
                            <span className = 'products-page__selectors'>12+ </span>                      
                        </li>

                        <li>
                            <input type = 'checkbox'></input>
                            <span className = 'products-page__selectors'>18+</span>                      
                        </li>

                    </ul>
                    
                </div>

            </div>

            <div className = 'products-page__search'>
                <SearchBar />

                <div className = 'catalog'>
                    {productsArray.map((game) => {
                        
                        return (
                            <GameCard className = 'catalog-gamecard' key = {game.index} 
                                backgroundImage = {game.image} 
                                description = {game.description}
                                ageLimit = {game.ageLimit} 
                            />
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default SearchProductsPage
