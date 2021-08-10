import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'

// Search Bar Component
import SearchBar from '@Components/searchBar/searchBar.tsx'
import '@Components/searchBar/searchBar.scss'

import { getProductsAPI } from '@/api/api';
import { getFilteredProducts } from '@/redux/actions/actions'

const SearchProductsPage: React.FunctionComponent = (props) => {

    const dispatch = useDispatch()
    
    SearchProductsPage.propTypes = {
        title: PropTypes.string,
        filterByPlatform: PropTypes.array,
    }

    const [productsArray, setProductsArray] = useState([])

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

    // Filters____________________________________________________________________________________________

    const filterByGenre = (value) => {
        if (value === 'All genres') {
            dispatch(getFilteredProducts(productsArray.filter((game) => game.genre)))
        } else if (value === 'Shooter') {
            dispatch(getFilteredProducts(productsArray.filter((game) => game.genre == 'Shooter')))
        } else if (value === 'Sandbox') {
            dispatch(getFilteredProducts(productsArray.filter((game) => game.genre == 'Sandbox')))
        } else if (value === 'RPG') {
            dispatch(getFilteredProducts(productsArray.filter((game) => game.genre == 'RPG')))
        } else if (value === 'Simulator') {
            dispatch(getFilteredProducts(productsArray.filter((game) => game.genre == 'Simulator')))
        } else if (value === 'Action-adventure') {
            dispatch(getFilteredProducts(productsArray.filter((game) => game.genre == 'Action-adventure')))
        }
    }

    const filterByAge = (value) => {
        if (value === 'All ages') {
            dispatch(getFilteredProducts(productsArray.filter((game) => game.ageLimit)))
        } else if (value === '3 +') {
            dispatch(getFilteredProducts(productsArray.filter((game) => (game.ageLimit == '3 +'))))
        } else if (value === '6 +') {
            dispatch(getFilteredProducts(productsArray.filter((game) => game.ageLimit == '6 +')))
        } else if (value === '12 +') {
            dispatch(getFilteredProducts(productsArray.filter((game) => game.ageLimit == '12 +')))
        } else if (value === '16 +') {
            dispatch(getFilteredProducts(productsArray.filter((game) => game.ageLimit == '16 +')))
        } else if (value === '18 +') {
            dispatch(getFilteredProducts(productsArray.filter((game) => game.ageLimit == '18 +')))
        }
    }

    const sortByName = () => {
        const result = productsArray.sort(function(a, b) {
            const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
            if (nameA < nameB)
              return -1
            if (nameA > nameB)
              return 1
            return 0
        })
        return dispatch(getFilteredProducts(result))      
    }

    const sortByRating = () => {
        const result = productsArray.sort(function(a, b) {
            const ratingA = a.rating, ratingB = b.rating
            if (ratingA < ratingB)
              return -1
            if (ratingA > ratingB)
              return 1
            return 0
        })
        return dispatch(getFilteredProducts(result))      
    }

    return (
        <div className = 'products-page'>

            <div className = 'products-page__filters'>
                <p className = 'products-page__title'>{props.title}</p>
                <p className = 'products-page__title'>Sort</p>

                <div className = 'products-page__container'>
                    <p>Criteria</p>
                    <Dropdown text = 'Select'>
                        <Dropdown.Menu className = 'products-page__select'>
                            <Dropdown.Item text = 'Name' onClick = {() => sortByName()}/>
                            <Dropdown.Item text = 'Rating' onClick = {() => sortByRating()}/>
                            <Dropdown.Item text = 'Price'/>
                            <Dropdown.Item text = 'Age Limit'/>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <select className = 'products-page__select' onChange = {() => sortByName()}>
                        <option value = '1' >Name</option>
                        <option value = '2' >Rating</option>
                        <option value = '3' >Price</option>
                        <option value = '4' >Age Limit</option>
                    </select> */}
                </div>
                
                <div className = 'products-page__container'>
                    <p>Type</p>
                    <select className = 'products-page__select'>
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>
                </div>

                <div className = 'products-page__selection'>
                    <p className = 'products-page__title'>Genres</p>
                    <ul className = 'products-page__selection-list'>
                        <li>
                            <input name = 'genreFilter' type = 'radio' onChange = {() => filterByGenre('All genres')}></input>
                            <span className = 'products-page__selectors'>All genres</span>
                        </li>

                        <li>
                            <input name = 'genreFilter' type = 'radio' onChange = {() => filterByGenre('Shooter')}></input>
                            <span className = 'products-page__selectors'>Shooter</span> 
                        </li>

                        <li>
                            <input name = 'genreFilter' type = 'radio' onChange = {() => filterByGenre('Sandbox')}></input>
                            <span className = 'products-page__selectors'>Sandbox</span>
                        </li>

                        <li>
                            <input name = 'genreFilter' type = 'radio' onChange = {() => filterByGenre('RPG')}></input>
                            <span className = 'products-page__selectors'>RPG</span>                      
                        </li>

                        <li>
                            <input name = 'genreFilter' type = 'radio' onChange = {() => filterByGenre('Simulator')}></input>
                            <span className = 'products-page__selectors'>Simulator</span>                      
                        </li>

                        <li>
                            <input name = 'genreFilter' type = 'radio' onChange = {() => filterByGenre('Action-adventure')}></input>
                            <span className = 'products-page__selectors'>Action-adventure</span>
                        </li>
                    </ul>
                </div>

                <div className = 'products-page__selection'>
                    <p className = 'products-page__title'>Age</p>
                    <ul className = 'products-page__selection-list'>
                        <li>
                            <input name = 'ageFilter' type = 'radio' onChange = {() => filterByAge('All ages')}></input>
                            <span className = 'products-page__selectors'>All ages</span>
                        </li>

                        <li>
                            <input name = 'ageFilter' type = 'radio' onChange = {() => filterByAge('3 +')}></input>
                            <span className = 'products-page__selectors'>3 +</span> 
                        </li>

                        <li>
                            <input name = 'ageFilter' type = 'radio' onChange = {() => filterByAge('6 +')}></input>
                            <span className = 'products-page__selectors'>6 +</span>
                        </li>

                        <li>
                            <input name = 'ageFilter' type = 'radio' onChange = {() => filterByAge('12 +')}></input>
                            <span className = 'products-page__selectors'>12 +</span>                      
                        </li>

                        <li>
                            <input name = 'ageFilter' type = 'radio' onChange = {() => filterByAge('16 +')}></input>
                            <span className = 'products-page__selectors'>16 + </span>                      
                        </li>

                        <li>
                            <input name = 'ageFilter' type = 'radio' onChange = {() => filterByAge('18 +')}></input>
                            <span className = 'products-page__selectors'>18 +</span>                      
                        </li>

                    </ul>
                    
                </div>

            </div>

            <div className = 'products-page__search'>
                <SearchBar />
                <p className = 'products-page__products-title'>Products</p>

                <div className = 'catalog'>
                    {props.filterByPlatform}
                </div>
            </div>
            
        </div>
    )
}

export default SearchProductsPage
